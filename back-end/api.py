from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from supabase import create_client
import os
import json
import runpod
import serverless_wsgi

REACT_BUILD_FOLDER = os.path.abspath("../front-end/react-app/dist")

app = Flask(__name__, static_folder=REACT_BUILD_FOLDER, template_folder=REACT_BUILD_FOLDER)
CORS(app, origins=["http://54.86.145.39:5000"])
load_dotenv()




@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.template_folder, "index.html")  # React SPA fallback


@app.route("/api/search", methods=["POST"])
def search():
    try:
        text = request.json["text"]
        k = request.json["k"]
    except Exception as e:
        print(e)
        return {"statusCode": 400, "body": json.dumps({"error": "Invalid request body"})}

    try:
        SUPABASE_URL = os.getenv('SUPABASE_URL')
        SUPABASE_KEY = os.getenv('SUPABASE_KEY')
        supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
        dishes = supabase.rpc('find_top_k_dishes', params={'search_vector': text, 'k': k}).execute()
        if len(dishes.data) == 0:
            raise Exception("No dishes found")
    except Exception as e:
        print(e)
        return {"statusCode": 500, "body": json.dumps({"error": "Error querying the database"})}

    return {"statusCode": 200, "body": dishes.data}


def lambda_handler(event, context):
    return serverless_wsgi.handle_request(app, event, context)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

