# 1 POST - param - string, send back top 3 dishes. 

from flask import Flask, request, jsonify
from retrive_top_three import RetrieveTopThree

app = Flask(__name__)

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

