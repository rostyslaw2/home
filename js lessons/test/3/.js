const users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Emma", age: 28 },
    { name: "Michael", age: 42 },
    { name: "Taras", age: 12 },
    { name: "Ivan", age: 72 },
    { name: "Anna", age: 32 },
    { name: "Lee", age: 61 },
    { name: "Late", age: 7 },
];

const users2 = [
    { name: "Bob", age: 20 },
    { name: "Emma", age: 28 },
    { name: "Liam", age: 25 },
    { name: "Olivia", age: 22 },
    { name: "William", age: 30 },
    { name: "Ava", age: 26 },
    { name: "James", age: 29 },
    { name: "Charlotte", age: 27 },
    { name: "Noah", age: 23 },
    { name: "Isabella", age: 24 },
    { name: "Benjamin", age: 21 },
    { name: "Sophia", age: 20 },
    { name: "Mason", age: 29 },
    { name: "Amelia", age: 25 },
    { name: "Ethan", age: 22 },
];

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function assignPasswords(users) {
    return users.map(user => {
        const passwordLength = Math.floor(user.age / user.name.length);
        const password = generatePassword(passwordLength);
        return { ...user, password };
    });
}

const combinedUsers = [...users, ...users2];
const usersWithPasswords = assignPasswords(combinedUsers);

console.log(usersWithPasswords);
