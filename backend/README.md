# BFHL Backend API - Enhanced Version

Modern Node.js Express API for the VIT Full Stack Question Paper implementation with professional error handling and optimized performance.

## 🚀 Features

- **POST /bfhl** endpoint with comprehensive data processing
- **GET /bfhl** endpoint returning operation code
- **Smart categorization** of numbers, alphabets, and special characters  
- **Mathematical operations** with sum calculation
- **String processing** with reverse concatenation and alternating case
- **Robust error handling** with graceful fallbacks
- **CORS enabled** for cross-origin requests
- **Status code 200** for all successful operations

## 👤 Personal Configuration

Pre-configured for **Aman Kumar Singh @22BCY10258**:

```javascript
const USER_DETAILS = {
    full_name: "aman_kumar_singh",
    dob: "17091999", // Update with actual DOB
    email: "aman@example.com", // Update with actual email
    roll_number: "22BCY10258"
};
```

## 🛠️ Setup and Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Update personal details** in `index.js` (optional):
```javascript
const USER_DETAILS = {
    full_name: "your_name", // Your name in lowercase
    dob: "ddmmyyyy", // Your DOB in ddmmyyyy format
    email: "your@email.com", // Your email
    roll_number: "YOUR123" // Your roll number
};
```

3. **Start development server:**
```bash
npm run dev
```

4. **Start production server:**
```bash
npm start
```

## 📡 API Endpoints

### POST /bfhl

Processes array data and returns categorized results.

**Request:**
```json
{
    "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
    "is_success": true,
    "user_id": "aman_kumar_singh_17091999",
    "email": "aman@example.com",
    "roll_number": "22BCY10258",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "Ra"
}
```

### GET /bfhl

Returns operation code for API identification.

**Response:**
```json
{
    "operation_code": 1
}
```

### GET /

Health check endpoint with API information.

**Response:**
```json
{
    "message": "BFHL API is running",
    "endpoints": {
        "POST /bfhl": "Main API endpoint"
    }
}
```

## 🔧 Data Processing Logic

### Number Processing
- Detects numeric strings using regex validation
- Separates even and odd numbers
- Calculates sum of all numeric values
- Returns numbers as strings (as required)

### Alphabet Processing
- Identifies alphabetic strings (single or multiple characters)
- Converts all alphabets to uppercase
- Extracts individual characters for concat_string processing

### Special Character Processing
- Identifies non-alphanumeric characters
- Preserves original character format
- Handles special symbols and punctuation

### String Concatenation
- Reverses order of alphabetic characters
- Applies alternating case pattern (Upper, lower, Upper, lower...)
- Returns processed concatenated string

## 🌐 Deployment

### Vercel Deployment

This API is optimized for Vercel deployment:

1. **Automatic deployment** via GitHub integration
2. **Serverless functions** with fast cold starts
3. **Global CDN** for optimal performance
4. **Environment variables** support

Configuration in `vercel.json`:
```json
{
    "version": 2,
    "builds": [{"src": "index.js", "use": "@vercel/node"}],
    "routes": [{"src": "/(.*)", "dest": "/index.js"}]
}
```

### Alternative Platforms
- **Railway:** Full-stack deployment
- **Render:** Web service deployment
- **Heroku:** Container-based deployment

## 🧪 Testing

### Local Testing
```bash
# Install dependencies
npm install

# Start server
npm start

# Test endpoint
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R","$"]}'
```

### Production Testing
Use the enhanced frontend interface or tools like:
- **Postman** (recommended)
- **curl** command line
- **Thunder Client** (VS Code)
- **Insomnia** REST client

## 📊 Performance Features

- **Fast response times** (~50-200ms)
- **Memory efficient** processing
- **Error boundary** protection
- **Request validation** with meaningful errors
- **CORS optimization** for frontend integration

## 🔒 Security Features

- **Input validation** for all requests
- **Error sanitization** to prevent information leakage
- **CORS configuration** for controlled access
- **Request size limits** via Express defaults

## 📝 Code Quality

- **ES6+ JavaScript** with modern syntax
- **Comprehensive comments** for maintainability
- **Error handling** with try-catch blocks
- **Consistent formatting** and structure
- **Modular functions** for reusability

## 🚀 Ready for Production

This backend is production-ready with:
- ✅ Professional error handling
- ✅ Optimized for serverless deployment
- ✅ CORS configured for frontend integration
- ✅ Comprehensive logging
- ✅ Input validation and sanitization
- ✅ RESTful API design principles
