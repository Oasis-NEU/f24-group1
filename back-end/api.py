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
from dotenv import load_dotenv
from supabase import create_client

import requests
import runpod
import json
import os

app = Flask(__name__)

# Enable CORS for all routes and origins
CORS(app)

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




@app.route('/search', methods = ['POST'])
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
        "statusCode": 200,
        "body": json.dumps(dishes.data)
    }
    


if __name__ == "__main__":
    app.run()

