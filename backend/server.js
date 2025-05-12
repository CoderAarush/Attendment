// Initialize server at port 5000
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const express = require('express');

const app = express(); // Initialize the express app
const PORT = 5000; // Port at which the server will be hosted
const file_path = path.join(__dirname, 'logins.json');

// Connect with port 5173 (Allow CORS)
app.use(cors());
app.use(express.json());

app.post('/save-login', (req, res) => {
    const newLogin = req.body;

    fs.readFile(file_path, 'utf-8', (err, data) => {
        let existingLogins = [];

        if (!err && data) {
            try {
                existingLogins = JSON.parse(data);
            } catch (parseErr) {
                console.error("Error parsing JSON:", parseErr);
                return res.status(500).send("Corrupted login data.");
            }
        }

        existingLogins.push(newLogin);

        fs.writeFile(file_path, JSON.stringify(existingLogins, null, 2), 'utf-8', (err) => {
            if (err) {
                console.error("Error writing to database:", err);
                return res.status(500).send("Failed to save credentials");
            }

            res.send("Login successfully saved");
        });
    });
});

app.get('/health-check', (req, res) => {
    res.json({
        message: "Hello, test response"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
