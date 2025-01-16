function greet (name="Guest") {
    return "hello " + name 
}
// console.log
(greet("gobroni"))
// 
// 2
// 
function add (a, b = 0) {
    return a + b 
}

// console.log
(add(1,8))
// 
// 3
// 
function area (width=1, height=1) {
    return width * height
}

// console.log
(area(3,5))
// 
// 4
// 
function CtoF (C=0) {
    return C * (9/5) + 32
}

// console.log
(CtoF(2))
// 
// 5
// 
let Shopinglist = {};

function addItem(item, quantity) {
    Shopinglist[item] = quantity;

    return Shopinglist;
}

// console.log
(addItem("bread", 10))
// 
// 6
// 
function power (num, pow) {
    return num ** pow
}

// console.log
(power(2,3))
//
// 7
//
function greet (name="Guest") {
    return "hello " + name 
}
// console.log
(greet("gobroni"))
// 
// 8
// 
function discount (dic=10, price) {
    return price - ((price * dic) / 100)
}

// console.log
(discount(20, 100))
// 
// ?
// 
function KK (f=2,r=3,q=4,w=5) {
    return (f*(r*r))/(q*w)
}

// console.log
(KK(2,3,12,15))
// 
// 14
// 
let numnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvennum(num) {
  let even = [];
  
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      even.push(num[i]);
    }
  }
  return even;
}

let evennum = getEvennum(numnum);
// console.log
(evennum);
