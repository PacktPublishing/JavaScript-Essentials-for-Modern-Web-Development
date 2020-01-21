const Joi = require("@hapi/joi");

module.exports = function ValidatorFactory(schema, source) {
    if (!["body", "query", "params"].includes(source)) {
        next(new Error("Invalid source"));
    }
    return (req, res, next) => {
        let data = req[source];
        let result = schema.validate(data);
        if (result.error) {
            res.sendStatus(400);
        }
        else {
            next();
        }
    };
}