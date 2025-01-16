// sorting arr
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log
(fruits.sort()); //sorts alphabeticly


// reversing arr
const fruits2 = ["c", "d", "a", "b"];
console.log(fruits2.reverse()) //just reverses it, no special order


// toSort() and sort()
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted(); //toSort(); creates duplicat of the arr (sorted one) while sort(); changes the existing one


//toReversed(); and reversed();
const months2 = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months2.toReversed(); //same as above (just reves instead of sort)


// wait till i understand
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}))