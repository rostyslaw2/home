// Імпортуємо бібліотеку env та файли base1.js
const env = require('env');
const { adminperson, users2 } = require('./base1');

// Новий масив для зареєстрованих осіб
const registeredPersons = [];

// Функція для перевірки, чи особа є адміністратором
function isAdmin(personId) {
    return adminperson.find(id => id === personId && id.includes('(admin)'));
}

// Проходимося по всіх особах в масиві users2 та додаємо їх до зареєстрованих осіб, якщо вони не є адміністраторами
users2.forEach(personId => {
    if (!isAdmin(personId)) {
        registeredPersons.push(personId);
    } else {
        console.log(`Особа з ID ${personId} є адміністратором і не може бути зареєстрована.`);
    }
});

console.log(registeredPersons);


///////////////////////////