// Імпорт масивів з файлів
//const { users, users2 } = require("./users9.js");

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
]


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
    

// Об'єднання масивів
const combinedUsers = [...users, ...users2];

const namesOnly = combinedUsers.map(user => user.name);

console.log(namesOnly);

module.exports = namesOnly;
