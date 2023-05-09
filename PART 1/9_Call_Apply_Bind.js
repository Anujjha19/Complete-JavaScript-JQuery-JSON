 /*  CALL  */

        /* Outside Function

        Then No need to write anout in Onject 

        function about (salary, livesIn) {
                console.log(` ${this.name}  , ${this.age} `)

        call it

        about.call(person_1 , 60000 , " West Bengal ")

        */

                const person_1 = {
                name: "Anuj",
                age: 21,
                about: function (salary, livesIn) {
                        //console.log(` ${this.name}  , ${this.age} `)
                        console.log(` ${this.name}  , ${this.age} => ${salary} , ${livesIn}  `)
                }
                }
                person_1.about(); // Anuj  , 21  

                const person_2 = {
                name: "Raj",
                age: 21,
                }
                //Boorow about Method from User 1
                person_1.about.call(); // undefined  , undefined 
                person_1.about.call(person_2); // Raj  , 21
                person_1.about.call(person_2, 60000, "West Bengal");
                // Raj  , 21 => 60000 , West Bengal




/*  APPLY   */

        /*    about.call(person_1 ,[ 60000 , " West Bengal "])  
        Pass required Parameter as Array      
        */


/*  BIND   */
/*  
        Bind return the function

        const func = about.bind(person_2, 60000, "West Bengal") ;
        func();

*/



/*   AVOID THESE MISTAKES  */

                function info(salary) {
                        console.log(` 
                                ${this.name}  
                                ${this.age} 
                                ${salary} 
                                `)
                }
                const student_1 = {
                        name: "Anuj",
                        age: 21,
                        about: info
                }
                
                const student_2 = {
                        name: "Raj",
                        age: 21,
                        about: info
                }
                
                /* 
                const myFunc = student_1.about
                myFunc();
                Error as this here refers to Window, here we just paste the function from the student_1 
                        // undefined  
                        // undefined 
                        // undefined 
                */

        //To Resolve this We Use Bind Method 
        const myFunc = student_1.about.bind(student_1, 20000)
        myFunc();
        // Anuj
        // 21
        // undefined if no value ,  else value 





// {   The call() method takes arguments separately. The apply() method takes arguments as an array   }
// {    The difference between call() and bind() is that the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, while the bind() creates a copy of that function and sets the this keyword.  }