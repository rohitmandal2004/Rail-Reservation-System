# Railway Quick Search Feature

A Python-based Quick Search system for railway reservations that provides city name autocomplete and automatic station code mapping.

## Features

1. **City Name Autocomplete**: Shows city suggestions as the user types
2. **Station Code Mapping**: Automatically maps selected cities to their station codes
3. **RESTful API**: Flask-based API for frontend integration
4. **Case-Insensitive Search**: Works with any case combination

## Installation

1. Install required packages:
```bash
pip install -r requirements.txt
```

## Usage

### 1. Standalone Python Script

Run the interactive demo:
```bash
python quick_search.py
```

Example:
```
Enter city name: ko
Suggestions:
  1. Kolkata
  2. Kochi
  3. Kota

Enter city name: kolkata
✓ Exact match found: Kolkata
Station Codes: HWH, SDAH, KOAA
```

### 2. Flask API Server

Start the API server:
```bash
python search_api.py
```

The server will run on `http://localhost:5000`

### 3. API Endpoints

#### Get City Suggestions
```
GET /api/search/suggestions?q=<query>&limit=<limit>
```

Example:
```bash
curl "http://localhost:5000/api/search/suggestions?q=ko"
```

Response:
```json
{
  "success": true,
  "suggestions": ["Kolkata", "Kochi", "Kota"],
  "count": 3,
  "query": "ko"
}
```

#### Get Station Codes
```
GET /api/search/station-codes?city=<city_name>
```

Example:
```bash
curl "http://localhost:5000/api/search/station-codes?city=Kolkata"
```

Response:
```json
{
  "success": true,
  "city": "Kolkata",
  "station_codes": ["HWH", "SDAH", "KOAA"]
}
```

#### Complete Search
```
GET /api/search?q=<query>
```

Example:
```bash
curl "http://localhost:5000/api/search?q=kolkata"
```

Response:
```json
{
  "success": true,
  "suggestions": ["Kolkata"],
  "station_codes": ["HWH", "SDAH", "KOAA"],
  "city": "Kolkata"
}
```

#### Get All Cities
```
GET /api/cities
```

#### Health Check
```
GET /api/health
```

## City to Station Code Mapping

The system includes mappings for major Indian cities:

- **Kolkata** → HWH, SDAH, KOAA
- **Delhi** → NDLS, DLI, NZM
- **Mumbai** → CSMT, CSTM, BCT, MMCT
- **Patna** → PNBE, PPTA
- **Goa** → VSG, KRMI
- And many more...

## Integration with Frontend

### JavaScript Example

```javascript
// Get suggestions as user types
async function getCitySuggestions(query) {
    const response = await fetch(`http://localhost:5000/api/search/suggestions?q=${query}`);
    const data = await response.json();
    return data.suggestions;
}

// Get station codes when city is selected
async function getStationCodes(city) {
    const response = await fetch(`http://localhost:5000/api/search/station-codes?city=${city}`);
    const data = await response.json();
    return data.station_codes;
}

// Usage
const suggestions = await getCitySuggestions('ko');
// Returns: ['Kolkata', 'Kochi', 'Kota']

const codes = await getStationCodes('Kolkata');
// Returns: ['HWH', 'SDAH', 'KOAA']
```

## File Structure

```
Rail-Ticket/
├── quick_search.py      # Core search logic
├── search_api.py        # Flask API server
├── requirements.txt     # Python dependencies
└── README_SEARCH.md     # This file
```

## Testing

Test the search functionality:

```python
from quick_search import get_city_suggestions, get_station_codes

# Test suggestions
print(get_city_suggestions("ko"))
# Output: ['Kolkata', 'Kochi', 'Kota']

# Test station codes
print(get_station_codes("Kolkata"))
# Output: ['HWH', 'SDAH', 'KOAA']
```

## Adding New Cities

To add new cities, update the `CITY_STATION_MAP` dictionary in `quick_search.py`:

```python
CITY_STATION_MAP = {
    "new_city": ["CODE1", "CODE2"],
    # ... existing cities
}
```

## Notes

- All searches are case-insensitive
- Suggestions are sorted with exact matches first
- The API supports CORS for frontend integration
- Station codes are returned as a list for flexibility

