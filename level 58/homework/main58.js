// don't know so don't tuch (below)
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What do you want to know about the user? ", function(key) {
//   console.log(`You asked for: ${key}`);

//   rl.close();
// });
// don't know so don't tuch (above)


let car = {
    model: "BMW",
    color: "black",
    top_speed: "240",
    year: "2019"
}

// console.log(car.model)

// scopes

// section

let user = {
    age: 56,
    birthYear: 1968,
    isAdmin: true,
    "likes people": true,
}

// user["likes people"] = false
// delete user.birthYear;
// console.log(user)
// console.log(user.age)

let key = "likes people";
user[key] = false
console.log(user["likes people"])  // why does it work only on objects with '' ?

// section 
// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//     };
//   }
  
//   let user2 = makeUser("John", 30);
//   console.log(user2.name);

