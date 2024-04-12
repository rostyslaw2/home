//масив схожий до java нщ при його оголошенні після формату зміної мтавимо[] а піля = {сам масив}

string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
cars[0] = "Opel";
Console.WriteLine(cars[0]);
// Тепер виведе Opel замість Volvo

string[] cars2 = { "Volvo", "BMW", "Ford", "Mazda" };
Console.WriteLine(cars2.Length); //Щоб дізнатися, скільки елементів має масив, скористайтеся властивістю Length

//


string[] cars3 = { "Volvo", "BMW", "Ford", "Mazda" };
Array.Sort(cars3);  //sort(масив) - сортує 
foreach (string i in cars3)
{
    Console.WriteLine(i);
}

// 2

int[] myNumbers = { 5, 1, 8, 9 };
Array.Sort(myNumbers);
foreach (int i in myNumbers)
{
    Console.WriteLine(i);
}


// Інші корисні методи масиву, наприклад Min, Max та Sum можна знайти в просторі імен System.Linq:

//using System; //треба
//using System.Linq; //треба

namespace MyApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myNumbers = { 5, 1, 8, 9 };
            Console.WriteLine(myNumbers.Max());  // повертає найбільше значення
            Console.WriteLine(myNumbers.Min());  // повертає найменше значення
            Console.WriteLine(myNumbers.Sum());  // повертає суму елементів
        }
    }
}