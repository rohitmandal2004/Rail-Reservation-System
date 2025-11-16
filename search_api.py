"""
Flask API for Quick Search Feature
Provides REST endpoints for city autocomplete and station code lookup
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
from quick_search import get_city_suggestions, get_station_codes, search_city

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend integration


@app.route('/api/search/suggestions', methods=['GET'])
def get_suggestions():
    """
    Get city name suggestions based on query.
    
    Query Parameters:
        q: Search query string
        limit: Maximum number of results (default: 10)
    
    Returns:
        JSON response with suggestions list
    
    Example:
        GET /api/search/suggestions?q=ko
        {
            "success": true,
            "suggestions": ["Kolkata", "Kochi", "Kota"],
            "count": 3
        }
    """
    query = request.args.get('q', '').strip()
    limit = int(request.args.get('limit', 10))
    
    if not query:
        return jsonify({
            'success': True,
            'suggestions': [],
            'count': 0
        })
    
    suggestions = get_city_suggestions(query, limit)
    
    return jsonify({
        'success': True,
        'suggestions': suggestions,
        'count': len(suggestions),
        'query': query
    })


@app.route('/api/search/station-codes', methods=['GET'])
def get_station_codes_endpoint():
    """
    Get station codes for a given city.
    
    Query Parameters:
        city: City name
    
    Returns:
        JSON response with station codes
    
    Example:
        GET /api/search/station-codes?city=Kolkata
        {
            "success": true,
            "city": "Kolkata",
            "station_codes": ["HWH", "SDAH", "KOAA"]
        }
    """
    city = request.args.get('city', '').strip()
    
    if not city:
        return jsonify({
            'success': False,
            'error': 'City parameter is required'
        }), 400
    
    station_codes = get_station_codes(city)
    
    if not station_codes:
        return jsonify({
            'success': False,
            'error': f'No station codes found for city: {city}'
        }), 404
    
    return jsonify({
        'success': True,
        'city': city.title(),
        'station_codes': station_codes
    })


@app.route('/api/search', methods=['GET'])
def search():
    """
    Complete search endpoint that returns both suggestions and station codes.
    
    Query Parameters:
        q: Search query string
    
    Returns:
        JSON response with suggestions and station codes (if exact match)
    
    Example:
        GET /api/search?q=ko
        {
            "success": true,
            "suggestions": ["Kolkata", "Kochi", "Kota"],
            "station_codes": null,
            "city": null
        }
        
        GET /api/search?q=kolkata
        {
            "success": true,
            "suggestions": ["Kolkata"],
            "station_codes": ["HWH", "SDAH", "KOAA"],
            "city": "Kolkata"
        }
    """
    query = request.args.get('q', '').strip()
    
    if not query:
        return jsonify({
            'success': True,
            'suggestions': [],
            'station_codes': None,
            'city': None
        })
    
    result = search_city(query)
    
    return jsonify({
        'success': True,
        **result
    })


@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint."""
    return jsonify({
        'status': 'healthy',
        'service': 'Railway Quick Search API'
    })


@app.route('/api/cities', methods=['GET'])
def get_all_cities():
    """
    Get all available cities.
    
    Returns:
        JSON response with list of all cities
    """
    from quick_search import ALL_CITIES
    
    return jsonify({
        'success': True,
        'cities': [city.title() for city in ALL_CITIES],
        'count': len(ALL_CITIES)
    })


if __name__ == '__main__':
    print("=" * 60)
    print("Railway Quick Search API Server")
    print("=" * 60)
    print("\nStarting server on http://localhost:5000")
    print("\nAvailable endpoints:")
    print("  GET /api/search/suggestions?q=<query>")
    print("  GET /api/search/station-codes?city=<city>")
    print("  GET /api/search?q=<query>")
    print("  GET /api/cities")
    print("  GET /api/health")
    print("\nPress Ctrl+C to stop the server.\n")
    
    app.run(debug=True, port=5000)

