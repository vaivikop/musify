// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  // Send the 'index.html' file when someone accesses the root URL
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/explore', (req, res) => {
  res.sendFile(path.join(__dirname, 'explore.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
