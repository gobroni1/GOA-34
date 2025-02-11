// exomple fo getter 
class Person1 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name.toUpperCase(); // Returns name in uppercase
    }
}

const person1 = new Person("Alice", 25);
console.log(person.name);  // ✅ "ALICE" (called like a property)


// exomple for setter 

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("❌ Age can't be negative!");
        } else {
            this._age = value;
        }
    }
}

const person = new Person("Bob", 30);
person.age = -5;  // ❌ "Age can't be negative!"
console.log(person.age);  // ✅ 30 (unchanged)

person.age = 35; 
console.log(person.age);  // ✅ 35 (updated)

// encapsulation and protection with #

class Person2 {
    #name;  // Private field
    #age;   // Private field

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Getter for name
    get name() {
        return this.#name;
    }

    // Setter for name
    set name(value) {
        if (value.length > 2) {
            this.#name = value;
        } else {
            console.log("❌ Name must be longer than 2 characters");
        }
    }

    // Getter for age
    get age() {
        return this.#age;
    }

    // Setter for age
    set age(value) {
        if (value >= 0) {
            this.#age = value;
        } else {
            console.log("❌ Age can't be negative");
        }
    }
}

const person = new Person("Alice", 25);

// Access via getters/setters
console.log(person2.name);  // ✅ Alice
person.name = "Bob";      // ✅ Updated to Bob
console.log(person2.name);  // ✅ Bob

// Trying to access private fields directly will give an error:
// console.log(person2.#name);  // ❌ SyntaxError: Private field '#name' must be declared in an enclosing class


