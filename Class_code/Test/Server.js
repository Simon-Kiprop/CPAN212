const express = require('express');
const app = express();
const PORT = 8080;

// Middleware to parse request
app.use(express.json());
app.get('/fetch', (req, res) => {
  res.send('You have entered the /fetch route');
});

app.post('/save', (req, res) => {
  res.send('You have entered the /save route');
});
app.delete('/delete', (req, res) => {
  res.send('You have entered the /delete route');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
