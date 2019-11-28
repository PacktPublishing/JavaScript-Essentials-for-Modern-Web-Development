import * as faker from 'faker'

export function FakePersonGenerator() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    };
}

export function FullName() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
}