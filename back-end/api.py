'''
How to use:
1. Run "pip install -r requirements.txt"
2. Run "export FLASK_APP=api.py"
3. Run "flask run"

'''


# 1 POST - param - string, send back top 3 dishes. 

from flask import Flask, request, jsonify
from retrive_top_three import RetrieveTopThree
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes and origins
CORS(app)
app = Flask(__name__)

CORS(app, resources={r"/search": {"origins": "http://localhost:5173"}})

@app.route('/search', methods = ['POST'])
def search():
    # convert bytes to string
    content = request.data.decode('utf-8')
    # return 400 if no content provided
    retrieve_top_three_object = RetrieveTopThree()
    if not content:
        return jsonify({"error": "no input provided"}), 400
    # create an object of RetrieveTopThree, and call the prove_work_return_json method.
    l = retrieve_top_three_object.prove_work_return_json(content)
    
    return jsonify(l), 200


if __name__ == "__main__":
    app.run()

