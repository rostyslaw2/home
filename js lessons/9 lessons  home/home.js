//вчили fs і домашнє завдання було треба вдосконалити минуле дз 
//зробивши через fs новий файл і в томц
// файлі записувати нових користувачів яких ти добавив в минулому дз


const fs = require('fs');
const { adminperson,  users3 } = require('./base3');

// Новий масив для зареєстрованих осіб
const registeredPersons = [];

// Функція для перевірки, чи особа є адміністратором
function isAdmin(personId) {
    return adminperson.find(id => id === personId && id.includes('(admin)'));
}

// Проходимося по всіх особах в масиві users2 та додаємо їх до зареєстрованих осіб, якщо вони не є адміністраторами
users3.forEach(personId => {
    if (!isAdmin(personId)) {
        registeredPersons.push(personId);
    } else {
        console.log(`Особа з ID ${personId} є адміністратором і не може бути зареєстрована.`);
    }
});

// Записуємо зареєстрованих користувачів у файл
fs.writeFile('registeredPersons.txt', registeredPersons.join('\n'), err => {
    if (err) {
        console.error('Помилка запису у файл:', err);
        return;
    }
    console.log('Дані про зареєстрованих користувачів успішно записані у файл registeredPersons.txt');
});
