const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send("Welcome to Backend Server");
});

app.get('/json', (req, res) => {
    res.json({ server: "Welcome to Backend", url: "localhost", port: PORT });
});

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
});
