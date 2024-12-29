class car{
    constructor(name, color){
       this.name = name;
       this.color = color
    }
    comment(){
        console.log("this is beautiful, and car run very fast")
    }
}

const carDetials = new car("Bus", "blue");
console.log(carDetials);

class CNG extends car{
    constructor(name, color, price, speed){
          super(name, color);
          this.price = price;
          this.speed = speed;
    }
}

const cngdetails = new CNG()