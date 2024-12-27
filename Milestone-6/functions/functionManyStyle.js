// 1: simple function
function add(x, y) {
    let sum = x + y;
    return sum;
}
let result = add(10, 20);
// console.log(result);


// 2: Expression Function

const addd = function (x, y) {
    return x + y;
}
// console.log(addd(10, 30));


// 3:Arrow functions
// 3:1
const addddd = (x, y, z) => x + y + z;
console.log(addddd(10, 20, 10));

//3:2
const person = (details) => details.name;

const storeMan = { name: "razu", age: 24, profession: "IT" }
console.log(person(storeMan));

//3:3
const person2 = details => details.age;

const storeMan2 = { name: "razu", age: 24, profession: "IT" }
console.log(person2(storeMan2));


//3:4

const randomNumbner = () => Math.random();

console.log(randomNumbner());

//3:5
//set the backet of the three or couple of paramiters & shoud be return the result of this arrow functions case
const multiply2 = (x, y, z) => {
    return x * y * z;
};

console.log(multiply2(10, 20, 50));