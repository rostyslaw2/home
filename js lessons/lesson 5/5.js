let user = { name: "josh", age: 15, }
console.log(user.name)
console.log(user.age)

user.cantry = "UA"

console.log(user)

//

delete user.age 

console.log(user)

//

let users = [
    { name: "josh", age: 43 }
]

function PUSH(user) {
    users.push(user)
}

let od = { name: "Git", age: 15, }
PUSH(od)

console.log(users);

//

let persons = [
    { name: "josh", age: 90 },
    { name: "andriu", age: 34 },
    { name: "mary", age: 10 }
]

function filtrePERSONSbyname(object) {
    return object.filter((person) => person.name.length > 4)

}

console.log(filtrePERSONSbyname(persons))

//

let persons2 = [
    { name: "josh", age: 90 },
    { name: "andriu", age: 34 },
    { name: "mary", age: 10 }
]

function forofpersone(object3) {

    for (let i = 0; i < object3.length; i++) {
        if (object3[i].name.length > 4) {
            console.log((object3[i]));
        }
    }

}

console.log(forofpersone(persons2)) 