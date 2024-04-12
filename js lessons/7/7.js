require ("dotenv").config() // require - витягує бібліотеки/файли

let arraynambers = [1,2,3,4,5,5,6];
let fruits = ["apple", "orange", "banna"];

let result = [...arraynambers, ...fruits]; //витягує всі дані і розгортає(крпіює)

console.log(result);

///

console.log(process.env.PASSWORD);

///

if (process.env.PASSWORD2 == "hhuohi76o") 
{
  console.log("пароль правильний")
}

const { populate } = require("dotenv");
const users = require("./basa.js")


console.log(users);

function getUsersbyid (id) {
  return users.find(user => user.id == id) //find - шукає обєкт
}


console.log(getUsersbyid(1));

///

let user2 = {id:3, name: "John", age: 34}

function addUsers (name) {
    users.push(name)
    return users
}

console.log(addUsers(user2))

