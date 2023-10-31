// Create web server
// Import the required modules
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route to handle incoming HTTP requests
app.get('/', (req, res) => {
    res.send('Hello, World! This is your web server.');
});

// Start the server on a specific port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
