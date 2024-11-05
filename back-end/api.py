# 1 POST - param - string, send back top 3 dishes. 

from flask import Flask, request, jsonify

app = Flask(__name__)

app.route('/search', methods = ['POST'])
def search():
    # convert bytes to string
    content = request.data.decode('utf-8')
    #return 400 if no content provided
    if not content:
        return jsonify({"error": "no input provided"}), 400
    
    return jsonify({"message": "content recieved", "content": content}), 200




