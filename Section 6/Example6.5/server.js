const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "client")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(8080, () => console.log(`Server listening on port 8080`));