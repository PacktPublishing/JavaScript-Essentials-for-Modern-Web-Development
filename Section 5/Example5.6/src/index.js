import {FakePersonGenerator, FullName} from './fake-person-generator';

(() => {
    console.log("here's a random person: ");
    console.log(FakePersonGenerator());
    console.log(FullName());
})();