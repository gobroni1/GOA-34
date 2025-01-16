// (Array Length, toString, at, join, pop, push)

let arr = [1,2,3,4,5]
console.log(arr.length)
console.log(arr.toString()) // includes the ',' as well
console.log(arr.at(1))      // indexind starts at 0 so second item is index 1
console.log(arr.join('-'))  
console.log(arr.push())
let newarr = arr.push(6,7,8,9) //it adds elements at the end of the arr and returns length of it
console.log(newarr)  // it mens that newarr is int
//console.log(newarr.pop()) // it removes last element from arr 

console.log("-----------")

// Array (shift, unshift, delete, concat)

console.log("-----------")

// Array (shift, unshift, delete, concat)

let arr2 = [0,1,2,3,4,5,6];
console.log(arr2.shift());  // removes first element and returns it (0)
console.log(arr2);          // [1,2,3,4,5,6]

console.log(arr2.unshift(-1));  // adds -1 at the beginning and returns new length (7)
console.log(arr2);              // [-1,1,2,3,4,5,6]

delete arr2[1];  // deletes element at index 1 (1), but leaves empty spot
console.log(arr2);  // [-1, <empty>, 2, 3, 4, 5, 6] (you’ll notice an empty slot)

let arr3 = [7,8,9];
let mergedArr = arr2.concat(arr3);  // merges arr2 and arr3
console.log(mergedArr);             // [-1, <empty>, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("-----------")

// Explore Unshift & Length
let arr4 = [10, 20];
console.log(arr4.unshift(0));  // adds 0 at the beginning and returns the new length (3)
console.log(arr4);             // [0, 10, 20]

let searchArr = [5, 6, 7, 8, 7, 9, 6, 5];
console.log(searchArr.indexOf(7));        // finds the first occurrence of 7 (index 2)
console.log(searchArr.lastIndexOf(7));    // finds the last occurrence of 7 (index 4)
console.log(searchArr.includes(8));       // checks if 8 is in the array (true)

console.log(searchArr.indexOf(10));       // searches for 10, which doesn’t exist (-1)
console.log(searchArr.includes('7'));     // checks if '7' is in the array (false, because it’s a string)

let stringArr = ["banana", "apple", "cherry", "date"];
console.log(stringArr.sort());  // sorts strings alphabetically ["apple", "banana", "cherry", "date"]

let numberArr = [12, 5, 8, 1, 4];
console.log(numberArr.sort());  // sorts numbers lexicographically (wrong order) [1, 12, 4, 5, 8]

console.log(numberArr.sort((a, b) => a - b));  // custom sort (ascending) [1, 4, 5, 8, 12]

console.log(numberArr.reverse());  // reverses the sorted array [12, 8, 5, 4, 1]

let mixedArr = [7, 3, 9, 1];
console.log(mixedArr.sort().reverse());  // sorts and reverses [9, 7, 3, 1]

let combinedArr = [9, 4, 7, 1];
console.log(combinedArr.sort());  // sorts in ascending order [1, 4, 7, 9]
combinedArr.push(10);
console.log(combinedArr);  // [1, 4, 7, 9, 10]

let firstArr = [1, 3, 5];
let secondArr = [2, 4, 6];
let mergedAndSorted = firstArr.concat(secondArr).sort((a, b) => a - b);
console.log(mergedAndSorted);  // [1, 2, 3, 4, 5, 6]

let reverseArr = [11, 12, 13];
reverseArr.push(14, 15, 16);
console.log(reverseArr.reverse());  // [16, 15, 14, 13, 12, 11]

let removeArr = [22, 33, 44, 55];
let indexToRemove = removeArr.indexOf(33);
removeArr.splice(indexToRemove, 1);  // removes element 33
console.log(removeArr);  // [22, 44, 55]

let joinArr = ["apple", "banana", "cherry"];
let joinedStr = joinArr.join(", ");
console.log(joinedStr);  // "apple, banana, cherry"
let splitArr = joinedStr.split(", ");
console.log(splitArr.includes("banana"));  // true


// damn bro this took so long, but lowkey i like doing this things.... (if your cheking this pls help)