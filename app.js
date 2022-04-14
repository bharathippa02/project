const express = require("express");

var fs = require('fs');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res) {

    fs.readFile('index.html', 'utf-8', function (err, data) {

        res.send(data);

        console.log(data);
    });
});

app.listen(3000, function () {
    console.log("connected to server 3000.");
});