define("FakePersonGenerator", ["faker"], function(faker) {

    function FakePersonGenerator() {
        return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        };
    }

    return FakePersonGenerator;
});


