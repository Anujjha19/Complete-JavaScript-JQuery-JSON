class Person {
    constructor( fname ,lname , age , place){
        this.fname= fname ;
        this.lname= lname ;
        this.age= age ;
        this.place= place;
    }

    /* fullName (){
        return ` ${this.fname} ${this.lname} `
    } //Outside console.log(person1.fullName());  */

    //Getters 
    get fullName (){
        return ` ${this.fname} ${this.lname} `
    }

   /*  //Setters
    setName( fname , lname){
        this.fname= fname ;
        this.lname= lname ;
    } */

    set fullName( fullName ){
        const [fname, lname ]= fullName.split(" ");
        this.fname= fname ;
        this.lname= lname ;
    }
}


const person1 = new Person ( "anuj" , "jha" , 21 , " Birpara ")
console.log(person1);
// console.log(person1.fullName());
// console.log(person1.fullName);


/* person1.setName ("FrOst " , "Jha "); //person1.fname = "FrOst " ; person1.lname = "Jha "
console.log(person1.fname); //FrOst 
console.log(person1.lname); //Jha
 */
person1.fullName = "FrOst Jha"
console.log(person1.fullName);