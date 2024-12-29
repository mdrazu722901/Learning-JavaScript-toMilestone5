// let numbers = [30, 60, 40, 30, 20, 10, 11];

// for (const element of numbers) {
//     let result = halfNumber(element);
//     console.log(result);
// }

// function halfNumber(number){
//   return number / 2;
// }

//same work by map, map can be show loop,

//simple

let numbers = [30, 60, 40, 30, 20, 10, 11];

//function
const half = x => x/2;

//map given another array
const result = numbers.map(half);
console.log(result);



//Too short and simple

const multiply2 = numbers.map(x => x*2);
console.log(multiply2);

