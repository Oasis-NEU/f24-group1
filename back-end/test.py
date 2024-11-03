import requests

url = 'http://127.0.0.1:5000/search'
data = 'Hello, world!'
headers = {'Content-Type': 'text/plain'}
response = requests.post(url, data=data, headers=headers)

print(response.json())  # Prints the response from the server

