//Inheritance , Manger is Inheritng properies from Employee
/* 
class employee {

    constructor(name) {
        console.log(" Constuctor : Employee " + name)
    }
}
class manager extends employee {
    constructor(){
        super()
    console.log(" Constuctor : Manager  " )
}
// let b = new employee();

}

// let a = new employee();
let b = new manager("Inheritance");
 */

/* //Prototype Method

class employee {

    constructor(name) {
        this.empName = name;
        console.log(" Constuctor : Employee " )
    }
    info(){
        console.log(" Employee Name : " + this.empName)

    }
}

class manager extends employee {
    info(){
        super.info();
        console.log(" Manager Name : " + this.empName);
    }
}
let a = new manager("Inheritance");

a.info(); */

class employee {

    constructor(name, age, salary) {

        this.empName = name;
        this.empage = age;
        this.empsalary = salary;

        console.log(" Constuctor : Employee ")
    }
    info() {
        console.log(

            `Employee Class ---  Name : ${this.empName} 
                    Age : ${this.empage} 
                    Salary : ${this.empsalary} 
            `)
    }
}

class manager extends employee {

    info() {

        let fare = 1000;
        let phone = 500;
        let totalsalary = this.empsalary + fare + phone;

        console.log(
            `Manger Class ---  Name : ${this.empName} 
                    Age : ${this.empage} 
                    Total_Salary : ${totalsalary} 
            `)
    }
}


let userSendingValueMANAGER = new manager(" Anuj Jha ", 21, 60000);
let userSendingValueEMPLOYEE = new employee(" Adi  ", 30, 12000);
userSendingValueMANAGER.info();
userSendingValueEMPLOYEE.info();
