// 1
// function Car(make, model, year, color, price) {
//     this.make = make;    
//     this.model = model;  
//     this.year = year;    
//     this.color = color;  
//     this.price = price;  
// }

// const car1 = new Car('toyota', 'corolla', 2020, 'red', 20);
// const car2 = new Car('honda', 'civic', 2021, 'blue', 22);
// const car3 = new Car('ford', 'mustang', 2022, 'black', 30);
// const car4 = new Car('chevrolet', 'malibu', 2019, 'gray', 18);
// const car5 = new Car('tesla', 'model 3', 2023, 'white', 35);

// 2 

// function person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         return "Hello, I am " + this.name + " and I'm " + this.age + " years old.";
//     };
// }

// const man1 = new person("gobroni", 15);
// console.log(man1.greet());

// 3

function lib (city, books) {
    this.city = city;
    this.books = books;
    this.whatBooks = function(){
        return "in " + city + " we have " + books;
    };
}

