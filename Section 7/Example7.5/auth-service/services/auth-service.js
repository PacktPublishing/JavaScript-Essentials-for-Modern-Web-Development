const bcrypt = require("bcryptjs");
const User = require("../models/user");

module.exports = class AuthService {
    async signUp(user) {
        user.password = bcrypt.hashSync(user.password);
        return await User.create(user);
    }

    async signIn(email, password) {
        let user = await User.findOne({
            email
        });
        return bcrypt.compareSync(password, user.password) ? user : null;
    }
}