const faker = require("faker");

function getUsers() {
    return Array(10).fill(0).map(() => {
        return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        };
    });
}

function getPremiumUsers(){
    return getUsers();
}

function getTrialUsers() {
    return getUsers();
}

function getDiscountedUsers() {
    return getUsers();
}

function getAllUsers() {
    return [getTrialUsers(), getPremiumUsers(), getDiscountedUsers()];
}

let allUsers = getAllUsers();
// console.log(allUsers);

// console.log(
//     allUsers.flat()
// );

console.log(
    allUsers.flatMap(users => users.map(u => u.email))
);