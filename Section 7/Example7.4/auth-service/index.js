const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const PORT = process.env.PORT;

const AuthController = require("./controllers/auth-controller");

if (!PORT) {
    console.error("Post is missing");
}

const app = express();
app.use(bodyParser.json());
app.use(cors({
    methods: ["GET", "POST", "OPTIONS", "PUT"] //Access-Control-Allow-Headers: GET,POST,OPTIONS,PUT
}));
app.use(helmet({
    hidePoweredBy: true
}));
app.use(morgan("tiny"));

app.use("/auth", AuthController);

app.get("/", (req, res) => {
    res.send("Test response");
});

app.listen(PORT, () => {
    console.log(`Auth Service listening on ${PORT}`);
})