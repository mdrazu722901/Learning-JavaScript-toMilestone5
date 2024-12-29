class teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    text(){
        console.log("teacher teach Math Subject")
    }
}

const faruq = new teacher("Faruq", "Math")
console.log(faruq);
const Manik = new teacher("Manik", "English")
console.log(Manik);

