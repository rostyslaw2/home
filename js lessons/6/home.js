
let registeredPersons = [];

function isRegistered(person) {
    for (let i = 0; i < registeredPersons.length; i++) {
        if (registeredPersons[i] === person) {
            return true; 
        }
    }
    return false;
}


function registerPerson(person) {
    if (!isRegistered(person)) {
        registeredPersons.push(person);
        console.log(`${person} було успішно зареєстровано.`);
    } else {
        console.log(`${person} вже зареєстровано.`);
    }
}


registerPerson("Іван");
//registerPerson("Петро"); 
registerPerson("Іван"); 
//registerPerson("Катя"); 
//registerPerson("Андрій"); 
//registerPerson("Ярослав"); 
//registerPerson("Макс"); 


/////////////////////////////////////////

let registerperson = [
    { id: 1 ,name: "josh", age: 90 },
    { id: 2 ,name: "andriu", age: 34 },
    { id: 3 ,name: "mary", age: 10 }
]

let newregisterperson = [
    { id:4 ,name: "Ostap", age: 16 },
    { id:2 ,name: "andriu", age: 34 }
]


function isRegistered() {
    for (let i = 0; i < registerperson.length; i++) {
        if (registerperson[i].id === id) {
            return true; // Особа з таким ID вже зареєстрована
        }
    }
    return false; // Особа з таким ID не зареєстрована
}

function registerPerson() {
    if (!isPersonRegistered(id)) {
        newregisterperson.push(registerperson);
        console.log("Особу з ID " + id + " успішно зареєстровано.");
    } else {
        console.log("Особа з ID " + id + " вже зареєстрована.");
    }
}

console.log(registerperson);