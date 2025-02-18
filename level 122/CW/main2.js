function minMax(lst) {
    return [Math.min(...lst), Math.max(...lst)];
}

function bonusTime(salary, bonus) {
    return "$" + (bonus ? salary * 10 : salary);
}

function maskify(str) {
    return str.length <= 4 ? str : '#'.repeat(str.length - 4) + str.slice(-4);
}
