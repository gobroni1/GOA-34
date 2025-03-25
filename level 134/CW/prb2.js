function toGEL(element, index,array) {
    array[index] = element * 2.7
}

let US = [23, 48, 13, 7, 36];

US.forEach(toGEL)

console.log(US);