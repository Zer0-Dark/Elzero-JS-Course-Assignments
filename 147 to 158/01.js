// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

class Car{
    constructor(name,model,price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        return "car is running now";
    }
    stop(){
        return "car is stopped";
    }
}

let carOne = new Car("MG",2022,420000);
let carTwo = new Car("tego",2011,50000);
let carThree = new Car("benz",2013,60000);
console.log(`car one name is ${carOne.n} And Mobel Is ${carOne.m} And The price Is ${carOne.p}`);
console.log(carOne.run());
// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"