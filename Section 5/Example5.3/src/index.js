const FakePersonGenerator = require("./fake-person-generator.umd");
// const FakePersonGenerator = require("./fake-person-generator.amd");

(function() {
    console.log("here's a random person: ");
    console.log(FakePersonGenerator());
})();