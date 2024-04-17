//const fs = require('fs');
const users = require('./basausers.js');

// Функція для обчислення середнього віку
function calculateAverageAge(users) {
    let totalAge = 0;
    let count = 0;

    // Проходимося по користувачам і обчислюємо загальний вік та кількість користувачів
    for (let user of users) {
        if (user.age >= 18 && user.age <= 60) {
            totalAge += user.age;
            count++;
        }
    }

    // Обчислюємо середній вік (ціле число)
    const averageAge = Math.floor(totalAge / count);
    return averageAge;
}

// Отримуємо список користувачів віком від 18 до 60 років
const filteredUsers = users.filter(user => user.age >= 18 && user.age <= 60);

// Обчислюємо середній вік користувачів
const averageAge = calculateAverageAge(filteredUsers);

// Виводимо результат
console.log(`Середній вік користувачів віком від 18 до 60 років: ${averageAge}`);