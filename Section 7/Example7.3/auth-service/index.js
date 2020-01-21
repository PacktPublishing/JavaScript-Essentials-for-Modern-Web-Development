const express = require("express");
const PORT = process.env.PORT;

const AuthController = require("./controllers/auth-controller");

if (!PORT) {
    console.error("Post is missing");
}

const app = express();

app.use("auth", AuthController);

app.listen(PORT, () => {
    console.log(`Auth Service listening on ${PORT}`);
})