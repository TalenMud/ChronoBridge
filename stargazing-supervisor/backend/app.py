from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/api/queue')
def get_queue():
    # In the future, this will use the AI model to predict the queue size
    queue_size = random.randint(5, 20)
    return jsonify({'queue': queue_size})

if __name__ == '__main__':
    app.run(debug=True)
