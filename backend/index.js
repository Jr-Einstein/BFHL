const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ENABLE CORS FOR ALL ORIGINS (MOST POWERFUL FIX FOR VERCEL + EXPRESS)
app.use(cors()); // <-- Universal solution. Handles preflight and all methods!

// Middleware to parse JSON bodies
app.use(express.json());

// Personal details - Aman Kumar Singh
const USER_DETAILS = {
    full_name: "aman_kumar_singh", // Name in lowercase
    dob: "04102004", // DOB in ddmmyyyy format (update with actual DOB)
    email: "amankumarsingh.org@.com", // Update with actual email
    roll_number: "22BCY10258" // Roll number
};

// Helper function to check if a string is a number
function isNumber(str) {
    return /^-?\d+$/.test(str);
}

// Helper function to check if a string contains only alphabets
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Main POST route
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(200).json({
                is_success: false,
                message: "Invalid input data"
            });
        }

        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];
        let special_characters = [];
        let sum = 0;
        let alphabet_chars = [];

        // Process each item in the data array
        data.forEach(item => {
            if (isNumber(item)) {
                const num = parseInt(item);
                sum += num;
                if (num % 2 === 0) {
                    even_numbers.push(item);
                } else {
                    odd_numbers.push(item);
                }
            } else if (isAlphabet(item)) {
                alphabets.push(item.toUpperCase());
                // Collect individual characters for concat_string
                for (let char of item) {
                    alphabet_chars.push(char);
                }
            } else {
                special_characters.push(item);
            }
        });

        // Create concat_string: reverse order with alternating caps
        let concat_string = "";
        if (alphabet_chars.length > 0) {
            alphabet_chars.reverse();
            concat_string = alphabet_chars.map((char, index) => {
                return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
            }).join('');
        }

        // Build response
        const response = {
            is_success: true,
            user_id: `${USER_DETAILS.full_name}_${USER_DETAILS.dob}`,
            email: USER_DETAILS.email,
            roll_number: USER_DETAILS.roll_number,
            odd_numbers: odd_numbers,
            even_numbers: even_numbers,
            alphabets: alphabets,
            special_characters: special_characters,
            sum: sum.toString(),
            concat_string: concat_string
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(200).json({
            is_success: false,
            message: "Internal server error"
        });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: "BFHL API is running",
        endpoints: {
            "POST /bfhl": "Main API endpoint"
        }
    });
});

// GET method for /bfhl (as per some requirements)
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
