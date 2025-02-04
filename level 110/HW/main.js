
class Animal {
constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
}

speak(){console.log(`${this.name} makes a sound!`);}}

class Car {
constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

honk() {console.log(`${this.make} ${this.model} goes honk!`);}}


class Person {
constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}

greet() {console.log(`Hello, my name is ${this.name} and I am a ${this.job}.`);}}