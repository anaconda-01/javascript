const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

var names = {};
var counter = 0;

// Serve the HTML file at the root URL ("/")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post("/submit", (req, res) => {
    const name = req.body.name;
    names[counter] = name;
    counter++;
    console.log(names); // To see the stored names on the server console
    res.send("File sent successfully");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
