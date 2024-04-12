//Вираз switch обчислюється один раз
//Значення виразу порівнюється зі значеннями кожного case
//Якщо є збіг, виконується відповідний блок коду
//Ключові слова break і default будуть описані далі в цьому підручнику

int day = 4;
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    case 4:
        Console.WriteLine("Thursday");
        break;
    case 5:
        Console.WriteLine("Friday");
        break;
    case 6:
        Console.WriteLine("Saturday");
        break;
    case 7:
        Console.WriteLine("Sunday");
        break;
}

//

int day2 = 4;
switch (day2)
{
    case 6:
        Console.WriteLine("Today is Saturday.");
        break;
    case 7:
        Console.WriteLine("Today is Sunday.");
        break;
    default:
        Console.WriteLine("Looking forward to the Weekend.");
        break;
}
// Виведе "Looking forward to the Weekend."
//Ключове слово default є необов’язковим і визначає певний код для запуску, якщо немає відповідного кейса:

