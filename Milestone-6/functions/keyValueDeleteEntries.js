let persone = {
    name: "razu", 
    age: 24, 
    education: "diploma engnieer",
}
let key = Object.keys(persone);
console.log(key);
let value = Object.values(persone);
console.log(value);

// let {age, ...others} = persone;
console.log();

Object.freeze(persone);

delete persone.name
console.log(persone);