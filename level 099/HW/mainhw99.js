// 1. მარტივი მისალმების ფუნქცია

const greet = (name = "guest") => `hello ${name}`;

// 2. ორი რიცხვის ჯამი

const plus = (a = 0, b = 5) => a + b;

// 3. მაქსიმალური რიცხვი

<<<<<<< HEAD
const max = (a, b) => a > b ? a : b;
=======
const max = (a=10, b=20) => a > b ? a : b;
>>>>>>> b181380 (new pc commit)

// 4. სამი რიცხვის გამრავლება

const mult = (a = 1, s = 2, d = 3) => a * s * d;

// 5. ფარმაცევტული ფასის გამოთვლა

const price = (a=40,b=a*0.05) => a+b;

// 6. დაბოლოების სიმრავლე

const txtMult = (txt="hello", a=3) => txt.repeat(a);

// 7. რიცხვების ამოწმება

const minmax = (a=5, b=10) => a > b;

// 8. პირადი ჩამონათვალი 

const greetPerson = ({ name = "მაია", age = 25, city = "თბილისი" }) =>`მე ვარ ${name}, ${age} წლის და ვცხოვრობ ${city}-ში.`;
  
// 9. რიცხვების სერია

const hell = (st=1, fsh=10, sp=1) => {
    const ls = [];

    for (let i = st; i <= fsh; i+= sp) {
        ls.push(i);
    }
    return ls
};

// 10.ობიექტის მნიშვნელობების გაერთიანება

const what = (a = { name: "name1", sirName: "sirName1" }, b = { name: "name2", sirName: "sirName2" }) => {
    const ls = [];
    const keys = Object.keys(a); 

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        ls.push([a[key], b[key]]);
    }

    return ls;
}


// this was fun but i do nor know hwere can i use this arror functions (i have used them in some projects but with no values, just to call real function)