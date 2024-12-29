let data = {
    tanha: {
        id: 1,
        stady: [{
            primary: [{ school: "abc" }, { location: "howladar bary" }],
            secondary: [{ school: "chand khali height schools" }, { location: "Jugir hat" }]
        }]
    }
}
console.log(data.tanha.stady[0].secondary[1].location);



//task = 2

let students = {
    222: {
        name: "md razu",
        section: "C",
        class: "Xi",
        adderss: {
            "building-no": 12,
            "city": "Dhaka",
            country: "Bangladesh"
        }
    }
}
console.log(students["222"].adderss["city"]);

//task: 3

let number = [50, 40, 30, 20, 50, 40, 90, 12, 23];
const getDivided = number.filter(x => x % 10 === 0);
console.log(getDivided);
const getDivided1 = number.find(x => x % 10 === 0);
console.log(getDivided1);


const instructor = [
    { name: "razu", age: 24, position: "junior" },
    { name: "rakib", age: 26, position: "senior" },
    { name: "anower", age: 30, position: "senior" }
];
const seniorInstructor = instructor.filter(x => x.position === "senior");
console.log(seniorInstructor);

const people = [{ name: "tamim", age: 22 }, { name: "tamim2", age: 40 }, { name: "tamim3", age: 34 }];
const sumAge = people.reduce((x, y) => x + y.age, 0)
console.log(sumAge);
