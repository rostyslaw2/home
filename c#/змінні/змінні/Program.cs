//int - зберігає цілі (цілі числа) без десяткових знаків, наприклад 123 або -123
//double,float - зберігає числа з плаваючою комою з десятковими дробами, наприклад 19,99 або наукові одиниці
//char - зберігає окремі символи, такі як 'a' або 'B'. Значення символів оточені одинарними лапками
//string - зберігає текст, наприклад "Hello World!" Рядкові значення взяті в подвійні лапки
//bool - зберігає значення з двома станами: true або false

//string

using System.Net.Security;

string name = "привіт";
 Console.WriteLine(name);

//int 

int x = 4+4 * 2;
Console.WriteLine(x);

int y;
y = 667;
Console.WriteLine(y);

int z = 9;
z = 109;
Console.WriteLine(z);

//bool

bool mymod  = false;
bool mymo = true;

// const + зміна + імя = то саме що і в js

const int r = 90;
//r = 78// при const  змінювати не можна

// поєднання зміни з виводом тексту

int t  =  67;
Console.WriteLine("ghb" + " " + t);

//поєдння 2 різних змінних 

int u  = 2;
string name2 = "pang";
string name3 = name2 + " " + u;
Console.WriteLine(name3);

//виводимо кілька одинакових змінних 

int q = 2, m = 3, p = 4; // заиість int можуть бути і  інші зміні
Console.WriteLine(q + m + p);

int e, tt, rr;
e = tt = rr = 50;
Console.WriteLine(e + rr + tt);


//індикатори це те як ви назвали зміну наприклад:
// int m = 14 так ми будемо губидитися в коді і код стане важче розуміти 
// int myAge = 14 повна назва зміної сильно полегшує розуміння 

//Length довжина рядка
string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Console.WriteLine("Довжина рядка txt становить: " + txt.Length);

//ToUpper() і ToLower() 
//ToUpper() весь текст великий
//ToLower() малий

string txt2 = "Hello World";
Console.WriteLine(txt.ToUpper());   // Виведе "HELLO WORLD"
Console.WriteLine(txt.ToLower());   // Виведе "hello world"

//Ви також можете використовувати метод string.Concat(), щоб об’єднати два рядки:

string firstName = "John ";
string lastName = "Doe";
string namу = string.Concat(firstName, lastName);
Console.WriteLine(name);

//Іншим варіантом конкатенації рядків є інтерполяція рядків, яка замінює значення змінних у заповнювачі в рядку. Зауважте, що вам не потрібно турбуватися про пробіли, як у випадку з конкатенацією:
string firstNamу = "John";
string lastNamу = "Doe";
string nam = $"My full name is: {firstName} {lastName}";
Console.WriteLine(name);

//Ви можете отримати доступ до символів у рядку, посилаючись на його індексний номер у квадратних дужках [].
//У цьому прикладі друкується перший символ myString:

string myString = "Hello";
Console.WriteLine(myString[0]);  // Виведе "H"

//Ви також можете знайти позицію індексу певного символу в рядку за допомогою методу IndexOf():

string myStrin = "Hello";
Console.WriteLine(myString.IndexOf("e"));  // Виведе "1"

//Іншим корисним методом є Substring(), який витягує символи з рядка, починаючи з указаної позиції/індексу символу, і повертає новий рядок. Цей метод часто використовується разом із IndexOf(), щоб отримати конкретну позицію символу:

// Повне ім’я
string nam3 = "John Doe";

// Розташування літери D
int charPos = name.IndexOf("D");

// Отримати прізвище
string lastNam = name.Substring(charPos);

// Роздрукуйте результат
Console.WriteLine(lastName);

//бул

bool isCSharpFun = true;
bool isFishTasty = false;
Console.WriteLine(isCSharpFun);   // Виведе True
Console.WriteLine(isFishTasty);   // Виведе False

//Тип даних char використовується для зберігання одного символу. Символ має бути в одинарних лапках, як-от 'A' або 'c':

char myGrade = 'B';
Console.WriteLine(myGrade);

//

//Оператор Назва	Опис	Приклад	
//&& 	Логічне and	Повертає True, якщо обидва твердження істинні	x < 5 &&  x < 10	
//|| 	Логічне or	Повертає True, якщо одне з тверджень є істинним	x < 5 || x < 4	
//!	Логічне not	Перевертає результат, повертає False, якщо результат істинний	!(x < 5 && x < 10)

//==	Дорівнює	x == y	
//!=	Не дорівнює	x != y	
//>	Більше ніж	x > y	
//<	Менше ніж	x < y	
//>=	Більше ніж або дорівнює	x >= y	
//<=	Менше ніж або дорівнює	x <= y