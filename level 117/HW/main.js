// class PI {
//     static timesPi (num){
//         return num * 3.14
//     }
// }

// console.log(PI.timesPi(7));



class Calculator {
    static tx (num1,num2){
        return num1 * num2;
    }
    static timesPi (num){
        return num * 3.14;
    }
    static toPowerx (n1, n2){
        let sum = 0;
        for (let i=0; i < n2-1; i++){
            sum *= n1
        }
        return sum; // also can do Math.pow(x,y)
    }
    static milsToTime(milliseconds) {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60)); // hours
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60)); // minutes
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000); // seconds

        return `${hours}h ${minutes}m ${seconds}s`;
    }
}

console.log(Calculator.tx(5,8));
console.log(Calculator.timesPi(5));
console.log(Calculator.toPowerx(2,3));
console.log(Calculator.milsToTime(4312543));

class CharSet {
    static alph ={a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26};
    
    static RanChar (dic){
        const keys = Object.keys(dic); 
        const randomKey = keys[Math.floor(Math.random() * keys.length)]; 
        return randomKey;
    }
}


console.log(CharSet.alph);
console.log(CharSet.RanChar(CharSet.alph));