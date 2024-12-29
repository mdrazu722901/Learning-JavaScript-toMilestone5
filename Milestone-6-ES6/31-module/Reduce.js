const numbers = [88, 90, 22, 33, 43, 21, 34, 56];
const sumTotal = numbers.reduce((accu, current) => accu + current, 0);
console.log(sumTotal);