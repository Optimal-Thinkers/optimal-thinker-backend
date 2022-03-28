const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors({}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`Hello about world from server!`);
});

app.listen(5000, () => {
    console.log(`now server is running at port number 5000`);
});