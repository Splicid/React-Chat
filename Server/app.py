from flask import Flask, jsonify
from flask_socketio import SocketIO
import os
import json

table = []
with open('generated.json', 'r') as f:
    table = json.loads(f.read())


app = Flask(__name__)

@app.route("/home")
def home():
    return jsonify(table)

if __name__ == "__main__":
    app.run(debug=True)