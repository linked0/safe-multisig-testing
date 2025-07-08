const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const userInput = req.body.userInput;
  res.send(`
    <h1>You submitted:</h1>
    <p>${userInput}</p>
    <a href="/">Go back</a>
  `);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
