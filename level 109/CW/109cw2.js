function idk (op, ...args) {
    return op (...args)
}

function add(...args) {
    let sum = 0;
    for (let num of args) {
      sum += num;
    }
    return sum;
}

console.log(idk(add, 1,2,6,2,8,43))