const express = require('express');
const app = express();
const port = 3000;
const summarizeText = require('./summarize');


// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
// app.use(express.static('public'));

app.get('/', (req, res) => {

    const path = require('path');

    const filePath = path.join(__dirname, '..', 'frontend', 'index.html');

    res.sendFile(filePath);

})

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});
