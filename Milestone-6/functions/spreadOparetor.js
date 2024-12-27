//Remamber : we will use SpreadOparetor in array & object

let number = [20, 10, 44, 60];
let number2 = number;
// number2.push("razu");
console.log(number);
// for this problems use spread praretor , spread oparetor give the main number
console.log(...number);
console.log(Math.max(...number));


let friends1 = ["tamim", "rubel", "rakib", "sakib", "omor"];
console.log(...friends1);

let friends2 = ["akash", "tanjijul", "saiful", "Hridoy", friends1];

 console.log(friends2);

//  in the case when you are copy friends1 into the friends2, copy with location here
// if we are copy just data not location, we use spread praretor


let friends3 = ["rahad", "tanjijul", "saiful", "Hridoy", ...friends1];

console.log(friends3)