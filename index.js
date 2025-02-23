const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.static("./public"));

app.listen(PORT, function(err) {
    if (err) return console.log(err);

    console.log("Listen to: http://localhost:" + PORT);
});