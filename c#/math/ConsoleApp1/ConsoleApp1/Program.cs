//Метод Math.Max(x, y) можна використовувати, щоб знайти найбільше значення x та y:

//Приклад
Math.Max(5, 10);

Math.Min(5, 10); // найменше

Math.Sqrt(25); //добуває корінь

Math.Abs(25.456); //повертає абсолютне знпчення

Math.Round(23.78); //округлює до найбільшого

//булеві

int x = 5;
Console.WriteLine(x == 5);  //true

int y = 5;
Console.WriteLine(y == 54); //false

int myAge = 25;
int votingAge = 18;

if (myAge >= votingAge)
{
    Console.WriteLine("Достатньо років, щоб голосувати!");
}
else
{
    Console.WriteLine("Недостатньо віку, щоб голосувати.");
}