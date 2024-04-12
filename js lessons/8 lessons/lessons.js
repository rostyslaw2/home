const fs = require("fs");
require("dotenv").config();
const { users } = require("./db.js");
//коротший код ніж for (i)
for (const user of users) {
  console.log(`користувач ${user.name} має ${user.age} років`);
}

fs.writeFile("file.txt", "1", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("The file was saved!");
});
//
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// fs.mkdir("images", err =>{ //створення папки
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created!");
//   });
//

fs.unlink("images.txt", (err) => {
  //видалення файлу
  if (err) {
    console.log(err);
  }
  console.log("file was deleted!");
});

fs.writeFile("images2.txt", JSON.stringify(users), (err) => {
  //видалення файлу
  if (err) {
    console.log(err);
  }
  console.log("file created");
});

// console.log(process.env.NAME);

for (const ofUsers of users) {
    if (ofUsers.name == process.env.NAME) {
        console.log(ofUsers.name);
}
}