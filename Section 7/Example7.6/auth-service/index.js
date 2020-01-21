const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const connect = require("./models/connect");

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

app.use("/", AuthController);


connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Auth Service listening on ${PORT}`);
    })
}).catch(err => {
    console.error("Something went wrong while setting up Auth Service", err);
})