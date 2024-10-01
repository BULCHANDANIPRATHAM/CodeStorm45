# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

# Replace with your actual API key or use environment variable
API_KEY = 'AIzaSyC8VazkvNuu0QKuoyQekZ0eH5X-Wrv2rF0';

@app.route('/api/places', methods=['GET'])
def get_places():
    city = request.args.get('city')
    if not city:
        return jsonify({"error": "City parameter is required"}), 400

    try:
        response = requests.get(
            'https://maps.googleapis.com/maps/api/place/textsearch/json',
            params={
                'query': f'{city} point of interest',
                'language': 'en',
                'key': API_KEY
            }
        )
        data = response.json()
        
        if response.status_code != 200:
            return jsonify({"error": "Failed to fetch data from Google Places API"}), response.status_code

        return jsonify(data['results'])
    except requests.RequestException as e:
        print(f"Error fetching attractions: {str(e)}")
        return jsonify({"error": "Failed to fetch attractions"}), 500

if __name__ == '__main__':
    app.run(debug=True)