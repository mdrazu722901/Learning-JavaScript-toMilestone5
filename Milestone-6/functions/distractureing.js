let persone = {name: "razu", age:44, education: "Diploma  Engineer" }
let {name, age, education} = persone;
console.log(name);

let number = [20, 55, 10, 0, 66];
let [first, second, third, fourth, fifth] = number;
console.log(fifth);

let {name: nam} = persone;
console.log(nam)