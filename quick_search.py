"""
Quick Search Feature for Railway Reservation System
Provides city name autocomplete and station code mapping
"""

# City to Station Code Mapping
CITY_STATION_MAP = {
    "kolkata": ["HWH", "SDAH", "KOAA"],
    "patna": ["PNBE", "PPTA"],
    "goa": ["VSG", "KRMI"],
    "delhi": ["NDLS", "DLI", "NZM"],
    "mumbai": ["CSMT", "CSTM", "BCT", "MMCT"],
    "bangalore": ["SBC", "BNC", "YPR"],
    "chennai": ["MAS", "MS"],
    "hyderabad": ["HYB", "SC"],
    "pune": ["PUNE"],
    "ahmedabad": ["ADI"],
    "jaipur": ["JP"],
    "lucknow": ["LKO", "LJN"],
    "kanpur": ["CNB"],
    "nagpur": ["NGP"],
    "indore": ["INDB"],
    "bhopal": ["BPL"],
    "surat": ["ST"],
    "vadodara": ["BRC"],
    "kochi": ["ERS", "CKI"],
    "kota": ["KOTA"],
    "jodhpur": ["JU"],
    "udaipur": ["UDZ"],
    "amritsar": ["ASR"],
    "chandigarh": ["CDG"],
    "dehradun": ["DDN"],
    "varanasi": ["BSB"],
    "allahabad": ["ALD"],
    "ranchi": ["RNC"],
    "bhubaneswar": ["BBS"],
    "visakhapatnam": ["VSKP"],
    "coimbatore": ["CBE"],
    "madurai": ["MDU"],
    "tirupati": ["TPTY"],
    "vijayawada": ["BZA"],
    "raipur": ["R"],
    "bilaspur": ["BSP"],
    "jabalpur": ["JBP"],
    "gwalior": ["GWL"],
    "agra": ["AGC"],
    "mathura": ["MTJ"],
    "meerut": ["MUT"],
    "roorkee": ["RK"],
    "haridwar": ["HW"],
    "ambala": ["UMB"],
    "karnal": ["KUN"],
    "panipat": ["PNP"],
    "sonipat": ["SNP"],
    "faridabad": ["FDB"],
    "gurgaon": ["GGN"],
    "noida": ["NOD"],
    "ghaziabad": ["GZB"]
}

# Get all cities (normalized to lowercase for matching)
ALL_CITIES = list(CITY_STATION_MAP.keys())


def get_city_suggestions(query: str, limit: int = 10) -> list:
    """
    Get city name suggestions based on user input.
    
    Args:
        query: User input string (e.g., "ko")
        limit: Maximum number of suggestions to return
    
    Returns:
        List of matching city names (capitalized)
    
    Example:
        >>> get_city_suggestions("ko")
        ['Kolkata', 'Kochi', 'Kota']
    """
    if not query:
        return []
    
    query_lower = query.lower().strip()
    matches = []
    
    for city in ALL_CITIES:
        if city.startswith(query_lower):
            matches.append(city.title())
        elif query_lower in city:
            matches.append(city.title())
    
    # Sort: exact matches first, then partial matches
    exact_matches = [c for c in matches if c.lower().startswith(query_lower)]
    partial_matches = [c for c in matches if c.lower() not in [m.lower() for m in exact_matches]]
    
    sorted_matches = exact_matches + partial_matches
    
    return sorted_matches[:limit]


def get_station_codes(city_name: str) -> list:
    """
    Get station codes for a given city name.
    
    Args:
        city_name: City name (case-insensitive)
    
    Returns:
        List of station codes for the city
    
    Example:
        >>> get_station_codes("Kolkata")
        ['HWH', 'SDAH', 'KOAA']
        >>> get_station_codes("kolkata")
        ['HWH', 'SDAH', 'KOAA']
    """
    city_lower = city_name.lower().strip()
    return CITY_STATION_MAP.get(city_lower, [])


def search_city(query: str) -> dict:
    """
    Complete search function that returns both suggestions and station codes.
    
    Args:
        query: User input string
    
    Returns:
        Dictionary with suggestions and station codes (if exact match found)
    
    Example:
        >>> search_city("ko")
        {
            'suggestions': ['Kolkata', 'Kochi', 'Kota'],
            'station_codes': None
        }
        >>> search_city("kolkata")
        {
            'suggestions': ['Kolkata'],
            'station_codes': ['HWH', 'SDAH', 'KOAA']
        }
    """
    query_lower = query.lower().strip()
    
    # Check if it's an exact match
    if query_lower in CITY_STATION_MAP:
        return {
            'suggestions': [query.title()],
            'station_codes': CITY_STATION_MAP[query_lower],
            'city': query.title()
        }
    
    # Get suggestions
    suggestions = get_city_suggestions(query)
    
    return {
        'suggestions': suggestions,
        'station_codes': None,
        'city': None
    }


def format_station_codes(city_name: str) -> str:
    """
    Format station codes as a readable string.
    
    Args:
        city_name: City name
    
    Returns:
        Formatted string with station codes
    
    Example:
        >>> format_station_codes("Kolkata")
        'HWH, SDAH, KOAA'
    """
    codes = get_station_codes(city_name)
    if codes:
        return ', '.join(codes)
    return "No station codes found"


# CLI Demo Function
def demo():
    """
    Interactive demo of the Quick Search feature.
    """
    print("=" * 60)
    print("Railway Quick Search - City Autocomplete Demo")
    print("=" * 60)
    print("\nType a city name (or partial name) to see suggestions.")
    print("Type 'exit' to quit.\n")
    
    while True:
        query = input("Enter city name: ").strip()
        
        if query.lower() == 'exit':
            print("\nThank you for using Quick Search!")
            break
        
        if not query:
            print("Please enter a city name.\n")
            continue
        
        result = search_city(query)
        
        print(f"\nQuery: '{query}'")
        print("-" * 60)
        
        if result['suggestions']:
            print(f"Suggestions ({len(result['suggestions'])}):")
            for i, city in enumerate(result['suggestions'], 1):
                print(f"  {i}. {city}")
            
            # Show station codes if exact match
            if result['station_codes']:
                print(f"\n✓ Exact match found: {result['city']}")
                print(f"Station Codes: {', '.join(result['station_codes'])}")
        else:
            print("No matching cities found.")
        
        print()


if __name__ == "__main__":
    # Run demo
    demo()
    
    # Example usage:
    print("\n" + "=" * 60)
    print("Example Usage:")
    print("=" * 60)
    
    examples = ["ko", "kolkata", "del", "mumbai"]
    
    for example in examples:
        print(f"\nSearching for: '{example}'")
        result = search_city(example)
        print(f"Suggestions: {result['suggestions']}")
        if result['station_codes']:
            print(f"Station Codes: {result['station_codes']}")

