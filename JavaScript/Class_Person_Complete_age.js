// Return age in year months dAYS HOURS 
//Vooting eligibilty


class myCar {

    constructor(name, year) {

        this.name = name ;
        this.year = year ;
        //this.model = model;
    }
    age(x){
        return x-this.year;
    }
}

let date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);

const car = new myCar("Volvo", 2020 );
// console.log(year - a.age )
console.log( car.age(year));
