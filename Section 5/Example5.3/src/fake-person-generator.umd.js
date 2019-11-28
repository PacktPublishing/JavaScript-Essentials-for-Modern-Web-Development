(function(root, factory) {
    if (typeof define == "function" && define.amd) {
        // cover amd systems
        define("FakePersonGenerator", ["faker"], factory)
    }
    else if (typeof exports == "object") {
        //cover commonjs
        module.exports = factory(require("faker"));
    }
    else {
        // cover browser (no module system)
        root.FakePersonGenerator = factory(root.faker);
    }
})(this, function(faker) {
    function FakePersonGenerator() {
        return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        };
    }

    return FakePersonGenerator;
});