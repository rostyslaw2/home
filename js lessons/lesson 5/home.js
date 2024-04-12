
let originalArray = [
    { name: "Аня", age: 25 },
    { name: "Петро", age: 30 },
    { name: "Олександр", age: 20 },
    { name: "Марія", age: 35 }
];

// Створення нового масиву для об'єктів з іменем більше 4 символів
let newArray = [];

// Цикл для перебору кожного об'єкту в початковому масиві
for (let i = 0; i < originalArray.length; i++) {
    // Перевірка, чи має ім'я об'єкту більше 4 символів
    if (originalArray[i].name.length > 4) {
        newArray.push(originalArray[i]);
    }
}

console.log(newArray);
