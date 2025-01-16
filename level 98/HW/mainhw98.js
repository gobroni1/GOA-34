function unique (s) {
    let ls = [];
    for (const i of s) {
        if (!ls.includes(i)){
            ls.push(i);
        }else{
            return false
        }
    }
    return true
}

console.log(unique([1,2,3,4,5]))


function matrixUnique (matrix) {
    let ls = [];
    for (const i of matrix) {
        if (unique(i)) {
            ls.push(i);
        }
    }
    return ls
}