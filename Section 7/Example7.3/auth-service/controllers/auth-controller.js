const router = require("express").Router();
const AuthService = require("../services/auth-service");
const jwt = require("jsonwebtoken");

const authService = new AuthService();

function createToken(user) {
    return jwt.sign({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    }, process.env.AUTH_SECRET, {
        algorithm: "HS256",
        audience: "all",
        issuer: "auth-service",
        expiresIn: "2 days"
    });
}

router.post("/signin", async (req, res) => {
    let user = await authService.signIn(req.body.email, req.body.password);
    let token = createToken(user);
    res.send(token);
});

router.post("/signup", async (req, res) => {
    let user = await authService.signUp(req.body);
    res.send(createToken(user));
});

module.exports = router;