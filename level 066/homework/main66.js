// function oddEeven (i) {
//     if (i % 2 === 0) {
//         return "even"
//     }else {
//         return "odd"
//     }
// }

// console.log(oddEven(4))

// 2

// function listMa(sum, ls) {
//     if (ls.length === 0) { 
//         return "list is empty";
//     } else {
//         for (let i of ls) {
//             sum += i;
//         }
//         return sum;
//     }
// }



// console.log(listMa(0, [1,5,22,58,450,4]))

// 3 

// const ls = [1, 5, 22, 58, 450, 4];

// let max =ls[0]; 

// for (let i of ls) {
//     if (i > max) {
//         max = i;
//     }
// }

// console.log(max);

// 4 

// function counts(str) {
//     const count = {}; 

//     for (let lete of str) {
//         if (lete in count) {
//             count[lete]++;
//         } else {
//             count[lete] = 1;
//         }
//     }

//     return count;
// }

// console.log(counts("stan by aminem, my man, high as hell - this all rimes btw")); 

// 5

// function isPalindrome(text) {

//     const cleanedText = text.toLowerCase()
//     const reversedText = cleanedText.split('').reverse().join('');
    
//     return cleanedText === reversedText; 
// }


// console.log(isPalindrome("level")); 