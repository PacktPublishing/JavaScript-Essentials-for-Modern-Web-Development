const express = require("express");
const PORT = process.env.PORT;

if (!PORT) {
    console.error("Post is missing");
}

const app = express();

app.post("/signin", (req, res) => {
    
});

app.post("/signup", (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Auth Service listening on ${PORT}`);
})