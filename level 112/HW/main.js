// წიგნების კლასები და ჟანრები

class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    // ჩვეულებრივი მეთოდი
    read() {
      return `${this.title} is being read...`;
    }
  
    // Getter method
    getSummary() {
      return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }
  }
  
  class Adventure extends Book {
    constructor(title, author, pages, adventureType, hero) {
      super(title, author, pages);
      this.adventureType = adventureType;
      this.hero = hero;
    }
  
    getSummary() {
      return `${this.title} is an epic adventure with ${this.hero} as the hero!`;
    }
  
    read() {
      return super.read() + ` It's an adventure of ${this.adventureType} style.`;
    }
  
    getHero() {
      return `The hero of this adventure is ${this.hero}.`;
    }
  }
  
  class Satire extends Book {
    constructor(title, author, pages, theme, humorLevel) {
      super(title, author, pages);
      this.theme = theme;
      this.humorLevel = humorLevel;
    }
  
    getSummary() {
      return `${this.title} is a brilliant satire on ${this.theme}. The humor level is ${this.humorLevel}.`;
    }
  
    read() {
      return super.read() + ` This satire explores the theme of ${this.theme} with a humor level of ${this.humorLevel}.`;
    }
  
    getHumor() {
      return `The humor level of this satire is ${this.humorLevel}.`;
    }
  }
  
  class Fantasy extends Book {
    constructor(title, author, pages, magicSystem, world) {
      super(title, author, pages);
      this.magicSystem = magicSystem;
      this.world = world;
    }
  
    getSummary() {
      return `${this.title} is a fantasy novel set in the world of ${this.world}, where magic works through ${this.magicSystem}.`;
    }
  
    read() {
      return super.read() + ` The magic system is based on ${this.magicSystem} in the world of ${this.world}.`;
    }
  
    getWorld() {
      return `The world of ${this.title} is ${this.world}.`;
    }
  }
  
  // წიგნების ობიექტები
  const book1 = new Adventure('The Lost Island', 'John Doe', 300, 'Mystery', 'Alice');
  const book2 = new Satire('The Mockery', 'Jane Doe', 250, 'Political Corruption', 'High');
  const book3 = new Fantasy('The Magic Realm', 'Timber Smith', 400, 'Elemental Magic', 'Eldoria');
  
  // წიგნის დეტალების ჩვენება
  function showBookDetails(genre) {
    let details = '';
    
    if (genre === 'adventure') {
      details = book1.getSummary() + '<br>' + book1.read() + '<br>' + book1.getHero();
    } else if (genre === 'satire') {
      details = book2.getSummary() + '<br>' + book2.read() + '<br>' + book2.getHumor();
    } else if (genre === 'fantasy') {
      details = book3.getSummary() + '<br>' + book3.read() + '<br>' + book3.getWorld();
    }
  
    document.getElementById('book-details').innerHTML = details;
  }
  