const faker = require("faker");

module.exports = function FakePersonGenerator() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    };
}
