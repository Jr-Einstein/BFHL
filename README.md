# 🚀 Enhanced BFHL Full Stack Project

A modern, professional implementation of the BFHL (Bajaj Finserv Health Limited) REST API with an interactive React frontend for testing and documentation.

## 📋 Project Overview

This project consists of two main components:
- **Backend API**: Node.js/Express REST API that processes arrays and returns categorized data
- **Frontend Interface**: Modern React application for testing the API with professional UI/UX

## ✨ Features

### Backend API
- ✅ POST `/bfhl` endpoint for data processing
- ✅ Categorizes input data into numbers, alphabets, and special characters
- ✅ Calculates sum of all numbers
- ✅ Creates concatenated string with alternating case
- ✅ Robust error handling and validation
- ✅ CORS enabled for cross-origin requests
- Curl Test Screenshot :
  <img width="1365" height="104" alt="image" src="https://github.com/user-attachments/assets/498f07e7-f6bc-470b-873a-45591445e92e" />


### Frontend Application
- ✅ Modern, responsive React interface
- ✅ Real-time API testing with sample data
- ✅ Interactive JSON viewer with syntax highlighting
- ✅ Copy-to-clipboard functionality
- ✅ Comprehensive API documentation
- ✅ Professional animations and transitions
- ✅ Mobile-friendly design

## 🏗️ Project Structure

```
bfhl-enhanced/
├── backend/
│   ├── index.js          # Express server with API logic
│   ├── package.json      # Backend dependencies
│   └── vercel.json      # Vercel deployment config
├── frontend/
│   ├── src/
│   │   ├── App.js       # Main React component
│   │   ├── App.css      # Styling and animations
│   │   └── index.js     # React entry point
│   ├── public/
│   │   └── index.html   # HTML template
│   └── package.json     # Frontend dependencies
└── README.md            # This file
```

## 🔧 API Specification

### Endpoint
```
POST /bfhl
```

### Request Format
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Response Format
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

## 📊 Data Processing Logic

1. **Numbers**: Separated into odd and even arrays (returned as strings)
2. **Alphabets**: Converted to uppercase and stored in array
3. **Special Characters**: Non-alphanumeric characters stored separately
4. **Sum Calculation**: Sum of all numeric values (returned as string)
5. **String Concatenation**: Alphabets concatenated in reverse order with alternating case

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ 
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bfhl-enhanced-project.git
cd bfhl-enhanced-project
```

2. **Setup Backend**
```bash
cd backend
npm install
node index.js
# Backend runs on http://localhost:3000
```

3. **Setup Frontend** (in new terminal)
```bash
cd frontend
npm install
npm start
# Frontend runs on http://localhost:3001
```

### Testing the API

**Using curl:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R","$"]}'
```

**Using the Frontend:**
1. Open http://localhost:3001
2. Click on example buttons to load test data
3. Click "Send Request" to test the API
4. View formatted responses and copy data as needed

## 🌐 Deployment

### Backend Deployment (Vercel)

1. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Set root directory to `backend`
   - Deploy with default settings

2. **Update Frontend API URL:**
   ```javascript
   // In frontend/src/App.js, update the API URL
   const [apiUrl, setApiUrl] = useState('https://your-backend-app.vercel.app/bfhl');
   ```

### Frontend Deployment (Vercel)

1. **Deploy Frontend:**
   - Create new Vercel project
   - Set root directory to `frontend`
   - Framework: Create React App
   - Deploy

### Alternative Deployment Options
- **Railway**: Full-stack deployment with database support
- **Render**: Free tier with automatic builds
- **Netlify**: Frontend deployment with serverless functions
- **Heroku**: Traditional hosting (requires credit card)

## 📝 API Examples

### Example 1: Mixed Data
```json
// Request
{
  "data": ["a", "1", "334", "4", "R", "$"]
}

// Response
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

### Example 2: Complex String Processing
```json
// Request
{
  "data": ["A", "ABcD", "DOE"]
}

// Response
{
  "is_success": true,
  "user_id": "aman_kumar_singh_17091999",
  "email": "aman@example.com",
  "roll_number": "22BCY10258", 
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A", "ABCD", "DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

## 🎨 Frontend Features

### Interactive UI Components
- **Request Builder**: Easy-to-use form for API testing
- **Response Viewer**: Formatted JSON display with syntax highlighting
- **Example Buttons**: Pre-loaded test cases for quick testing
- **Copy Functionality**: One-click copy for requests and responses
- **Documentation Tab**: Comprehensive API documentation

### Modern Design Elements
- **Glass Morphism**: Modern frosted glass effects
- **Smooth Animations**: CSS transitions and transforms
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Professional Typography**: Inter font with proper hierarchy
- **Color Coded Responses**: Visual distinction for different data types

## 🛠️ Technical Details

### Backend Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Middleware**: CORS, body-parser
- **Deployment**: Vercel Serverless Functions

### Frontend Technology Stack
- **Framework**: React 18
- **Styling**: CSS3 with modern features
- **Icons**: Lucide React (copy, external link icons)
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Create React App

### Key Features Implementation
- **Data Validation**: Comprehensive input validation and error handling
- **Type Checking**: Proper categorization of numbers, alphabets, and special characters
- **String Processing**: Complex concatenation logic with alternating case
- **Responsive Design**: Mobile-first approach with breakpoints
- **Performance**: Optimized rendering and state management

## 🔍 Error Handling

### Backend Error Responses
```json
{
  "is_success": false,
  "error": "Invalid input format"
}
```

### Frontend Error Display
- User-friendly error messages
- Network error handling
- Invalid JSON format detection
- API connection status indicators

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- **Desktop**: Full feature set with optimal layout
- **Tablet**: Adapted layout with touch-friendly interactions  
- **Mobile**: Compact design with essential functionality

## 🎯 Assignment Compliance

This project fully complies with the VIT BFHL assignment requirements:

- ✅ REST API with POST method
- ✅ Array processing with categorization
- ✅ Proper user_id format: `{full_name_ddmmyyyy}`
- ✅ All required response fields
- ✅ Numbers returned as strings
- ✅ Status code 200 for successful requests
- ✅ Hosted on cloud platform (Vercel)
- ✅ Public GitHub repository
- ✅ Exception handling and best practices

## 👤 Author Information

**Name**: Aman Kumar Singh  
**Roll Number**: 22BCY10258  
**Email**: aman@example.com  
**University**: VIT  

## 📄 License

This project is created for educational purposes as part of the VIT BFHL assignment.

## 🤝 Contributing

This is an assignment project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Create Pull Request

## 📞 Support

If you encounter any issues:

1. Check the browser console for JavaScript errors
2. Verify API endpoint is accessible
3. Test with provided example data
4. Ensure all dependencies are installed
5. Check network connectivity

## 🔗 Live Demo

- **Frontend Application**: [Your Vercel Frontend URL]
- **Backend API**: [Your Vercel Backend URL]/bfhl
- **GitHub Repository**: [Your GitHub Repository URL]

## 📊 Project Status

- ✅ Backend API Development: Complete
- ✅ Frontend Interface: Complete  
- ✅ Testing: Complete
- ✅ Documentation: Complete
- ✅ Deployment: Ready
- ✅ Assignment Submission: Ready

---

**Built with ❤️ for the VIT BFHL Assignment**
