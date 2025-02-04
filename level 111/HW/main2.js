
class Book {
constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

read() {console.log(`${this.title} is being read...`);}

getSummary() {return `${this.title} by ${this.author}, ${this.pages} pages.`;}

get getTitle() {return this.title;}}

class Adventure extends Book {
constructor(title, author, pages, adventureType, hero) {
    super(title, author, pages);
    this.adventureType = adventureType;
    this.hero = hero;
}

getSummary() {return `${this.title} is an epic adventure with ${this.hero} as the hero!`;}

read() {super.read(); console.log(`It's an adventure of ${this.adventureType} style.`);}

getHero() {return `The hero of this adventure is ${this.hero}.`;}

get getAdventureType() {return this.adventureType;}

get getHeroName() {return this.hero;}}

class Satire extends Book {
constructor(title, author, pages, theme, humorLevel) {
    super(title, author, pages);
    this.theme = theme;
    this.humorLevel = humorLevel;
}

getSummary() {return `${this.title} is a brilliant satire on ${this.theme}. The humor level is ${this.humorLevel}.`;}

read() {super.read();console.log(`This satire explores the theme of ${this.theme} with a humor level of ${this.humorLevel}.`);}

getHumor() {return `The humor level of this satire is ${this.humorLevel}.`;}

get getTheme() {return this.theme;}

get getHumorLevel() {return this.humorLevel;}}

class Fantasy extends Book {
constructor(title, author, pages, magicSystem, world) {
    super(title, author, pages);
    this.magicSystem = magicSystem;
    this.world = world;
}

getSummary() {return `${this.title} is a fantasy novel set in the world of ${this.world}, where magic works through ${this.magicSystem}.`;}

read() {super.read();  console.log(`The magic system is based on ${this.magicSystem} in the world of ${this.world}.`);}

getWorld() {return `The world of ${this.title} is ${this.world}.`;}

get getMagicSystem() {return this.magicSystem;}

get getWorldName() {return this.world;}}