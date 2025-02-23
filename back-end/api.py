from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from supabase import create_client
import os
import json
import runpod
import serverless_wsgi


app = Flask(__name__)
CORS(app, origins=["http://neu-bites.com/api/search"])
load_dotenv()

def getEmbeddings(text):
    try:
        api_key = os.getenv('RUNPOD_KEY')
        api_id = os.getenv('RUNPOD_ID')
        runpod.api_key = api_key
        endpoint = runpod.Endpoint(api_id)
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Error initialzing Runpod API"})
        }
    try:
        response = endpoint.run_sync(
            {
                "input": {
                    "model": "GIST-small-Embedding-v0",
                    "input": text
                }
            }
        )
    except TimeoutError:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Runpod API request timed out"})
        }
    except Exception as e:
        print(e)
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Error querying Runpod API"})
        }
    return response



@app.route("/api/search", methods=["POST"])
def search():
    try:
        text = request.json["text"]
        k = request.json["k"]
    except Exception as e:
        print(e)
        return {
            "statusCode": 400,
            "body": json.dumps({"error": "Invalid request body"})
        }
    try:
        embeddings = getEmbeddings(text)["data"][0]["embedding"]
    except Exception as e:
        print(e)
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Error getting embeddings"})
        }
    try: 
        SUPABASE_URL = os.getenv('SUPABASE_URL')
        SUPABASE_KEY = os.getenv('SUPABASE_KEY')
        supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
        dishes = supabase.rpc('find_top_k_dishes', params={'search_vector': embeddings,'k':k}).execute()
        if len(dishes.data) == 0:
            raise Exception("No dishes found")
    except Exception as e:
        print(e)
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Error querying the database"})
        }
    return {
        "statusCode": 200, "body": dishes.data}


def lambda_handler(event, context):
    return serverless_wsgi.handle_request(app, event, context)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

