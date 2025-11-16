"""
Test script for Quick Search functionality
"""

from quick_search import get_city_suggestions, get_station_codes, search_city

def test_suggestions():
    """Test city suggestions"""
    print("=" * 60)
    print("Testing City Suggestions")
    print("=" * 60)
    
    test_cases = [
        "ko",
        "kolkata",
        "del",
        "mumbai",
        "pat",
        "goa"
    ]
    
    for query in test_cases:
        suggestions = get_city_suggestions(query)
        print(f"\nQuery: '{query}'")
        print(f"Suggestions: {suggestions}")
    
    print("\n" + "=" * 60)

def test_station_codes():
    """Test station code mapping"""
    print("=" * 60)
    print("Testing Station Code Mapping")
    print("=" * 60)
    
    test_cities = [
        "Kolkata",
        "kolkata",  # Test case-insensitive
        "Delhi",
        "Mumbai",
        "Patna",
        "Goa"
    ]
    
    for city in test_cities:
        codes = get_station_codes(city)
        print(f"\nCity: {city}")
        print(f"Station Codes: {codes}")
    
    print("\n" + "=" * 60)

def test_complete_search():
    """Test complete search function"""
    print("=" * 60)
    print("Testing Complete Search")
    print("=" * 60)
    
    test_queries = [
        "ko",
        "kolkata",
        "del",
        "mumbai"
    ]
    
    for query in test_queries:
        result = search_city(query)
        print(f"\nQuery: '{query}'")
        print(f"Suggestions: {result['suggestions']}")
        if result['station_codes']:
            print(f"Station Codes: {result['station_codes']}")
            print(f"City: {result['city']}")
    
    print("\n" + "=" * 60)

if __name__ == "__main__":
    test_suggestions()
    test_station_codes()
    test_complete_search()
    
    print("\n[OK] All tests completed!")

