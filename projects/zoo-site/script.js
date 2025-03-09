class Animal {
    constructor(legs, spine) {
      this.legs = legs;
      this.spine = spine;
    }
    
    getAnimalInfo() {
      return `Legs: ${this.legs}, Spine: ${this.spine ? "Present" : "Absent"}`;
    }
  }

  class Mammal extends Animal {
    constructor(legs, spine, isWarmBlooded, hasFur) {
      super(legs, spine);
      this.isWarmBlooded = isWarmBlooded;
      this.hasFur = hasFur;
    }
    
    getMammalInfo() {
      return `Warm-blooded: ${this.isWarmBlooded ? "Yes" : "No"}, Fur: ${this.hasFur ? "Yes" : "No"}`;
    }
  }
  
  class Canine extends Mammal {
    constructor(legs, spine, isWarmBlooded, hasFur, packBehavior) {
      super(legs, spine, isWarmBlooded, hasFur);
      this.packBehavior = packBehavior; 
    }
    
    getCanineInfo() {
      return `Pack Behavior: ${this.packBehavior ? "Social and pack-oriented" : "Solitary"}`;
    }
  }

  class Dog extends Canine {
    constructor(legs, spine, isWarmBlooded, hasFur, packBehavior, breed, age) {
      super(legs, spine, isWarmBlooded, hasFur, packBehavior);
      this.breed = breed;
      this.age = age;
    }
    
    getInfo() {
      return `Breed: ${this.breed}, Age: ${this.age} years, ${this.getAnimalInfo()}, ${this.getMammalInfo()}, ${this.getCanineInfo()}`;
    }
  }
  
  const dogDatabase = {
    1: new Dog(4, true, true, true, true, "Labrador", 3),
    2: new Dog(4, true, true, true, true, "German Shepherd", 5),
    3: new Dog(4, true, true, true, true, "Bulldog", 2),
    4: new Dog(4, true, true, true, true, "Poodle", 4),
  };
  
  function displayDogs() {
    const container = document.getElementById("dog-info");
    for (let key in dogDatabase) {
      const dog = dogDatabase[key];
      const div = document.createElement("div");
      div.className = "dog-card";
      div.innerHTML = `<h3>Dog ${key}</h3><p>${dog.getInfo()}</p>`;
      container.appendChild(div);
    }
  }
  
  window.onload = displayDogs;
console.log("this is for a video so pay respect and say someting cool ok?? ")