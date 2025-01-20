console.log('\n\n-: App Started :-');


// app.js
const express = require('express');
const app = express();



// Basic route
app.get('/product', (req, res) => {
  res.status(200).send('NewProduct!');
});

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Listen on port 3000
const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`here Server is running on http://localhost:${PORT}`);
});

module.exports = app;  // Export app for testing

