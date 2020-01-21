const mongoose = require("mongoose");

const User = mongoose.model("User", {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contactDetails: {
        address: {
            street: {
                type: String,
                required: false
            },
            number: {
                type: String,
                required: false
            },
            postalCode: {
                type: String,
                required: false
            }
        },
        phone: {
            type: String,
            required: false
        },
        required: false
    }
});

module.exports = User;