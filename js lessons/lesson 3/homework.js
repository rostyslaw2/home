/// 1
function findNumbers(arr) {
    return arr
      .map(item => item % 3 === 0 ? item : undefined)// ми позначаємо, що значення, яке не задовольняє умову, не має бути збережено
      .filter(item => item !== undefined); //після цього ми видаляємо всі undefined значення за допомогою методу filter.
  }
  
  const wordsAndNumbers = ['apple', 9, 'banana', 12, 'cherry', 7, 18, 'date', 21];
  
  const div = findNumbers(wordsAndNumbers);
  
  console.log(div); // Виведе: [9, 12, 18, 21]
  
  /// 2 

  function вирішити(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        if (a > b) {
            return `Більше з парних чисел: ${a}`;
        } else {
            return `Більше з парних чисел: ${b}`;
        }
    } else if (a % 2 !== 0 && b % 2 !== 0) {
        if (a < b) {
            return `Менше з непарних чисел: ${a}`;
        } else {
            return `Менше з непарних чисел: ${b}`;
        }
    } else {
        return `Число ${a} в степені ${b} буде: ${Math.pow(a, b)}`;
    }
}

// Приклади використання:
console.log(вирішити(6164, 4)); // Більше з парних чисел: 6164
console.log(вирішити(5, 3));    // Менше з непарних чисел: 3
console.log(вирішити(4, 5));    // Число 4 в степені 5 буде: 1024

//