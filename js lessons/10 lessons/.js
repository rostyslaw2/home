let words = ["apple", "Car", "house", "Pear", "tues"];
words.sort((a, b) => a.localeCompare(b)); //сортує по ругістру(алфавіту)
console.log(words);

//



const  users5  = require('./base4');

for (x of users5) {
    console.log(`${x.name}` + " " + `${x.email}`);
}


//
let children2 = [];

for (x of users5) {
    children2.push(x.children)
   // console.log(`${x.children}`)
       //children2.sort((a, b) => a.localeCompare(b));
      // console.log(children2);
}

console.log(children2);

//

let oponent  =  []

const fs = require('fs');


function sortChildren(arrayObject) {
    let sortedChildren = [];
    for (const word of arrayObject) {
      sortedChildren = sortedChildren.concat(word.children);
    }
    sortedChildren.sort((a, b) => a.localeCompare(b));
    return sortedChildren;
  }

  console.log(sortChildren(users5))

  //let result = sortChildren(users5)

  //fs.writeFile('oponent.txt', sortChildren(user5).join('\n'), err => {
 //   if (err) {
 //       console.error('Помилка запису у файл:', err);
 //       return;
 //   }
 //   console.log(result);
//});
  


  let result = sortChildren(users5);
fs.writeFile("output.txt", JSON.stringify(result), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file created");
  });
  

