function factorial(n) {
    // Якщо число менше або дорівнює нулю, повертаємо 1
    if (n <= 0) {
        return 1;
    } else {
        let result = 1;
        // Обчислюємо факторіал за допомогою циклу
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Вхідне число для обчислення факторіалу
const number = 5; // Можна змінити на будь-яке інше число

console.log(`Факторіал числа ${number} дорівнює: ${factorial(number)}`);

///


const sekret = 0;
let t = 100;

// тут ми додаємо і виводимо зміну t і sekret в консоль
if (sekret + t) { 
    console.log(`сума t і sekret дорівнює ${t + sekret}`); 
}

///

//const sekret = 0;
//let t = 100;

// тут ми додаємо і виводимо зміну t і sekret в консоль
if (sekret + t) { 
    console.log(`сума t і sekret дорівнює ${t + sekret}`); 
}

///

const secret = 100; // присвоєїмо незміне значення sekret

for (let i = 0; i <= secret; i++) { //створюєм цикл 
    let y = secret - i; //пишем що y  буде залежити від різниці sekret,i;
    console.log(`число ${i} + число ${y} = ${secret}`); //виводим в консоль
}

///

