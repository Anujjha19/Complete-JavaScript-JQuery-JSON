
//  ->   {  Iterables are those in which we can use FOR OF Loop   ex : String , Array  <-> Objects are not Iterables   }


//  ->   {  Array Like Objects  are those having LENGTH property and in which we access them using INDEX  ex : String  }

/* -> SET  
        {   
            -> Dont Change the Original Array 

                Sets are also Iterables , 
                It stores DATA , 
                Have its Own Methods  , 
                No index Based Access ,
                Order is Not Guranteed ,
                UNIQUE Items Only { No Duplicates Allowed }

            SET to use when You have UNIQUE values and You know 1 values can come Only Once
        }
 */

        const Unique_Only_inSET = new Set([1, 2, 1]);
        console.log(Unique_Only_inSET); // Set(2) { 1, 2 }

        const String_SET = new Set("anuj");
        console.log(String_SET); // Set(4) { 'a', 'n', 'u', 'j' }

        const zSET = new Set([1, 2, 3]);
        console.log(zSET); // Set(3) { 1, 2, 3 }

        /*  SET Properties / Methods  */

        const arr = ["anuj", "jha"];
        const aSet = new Set();




/* INSERT ELEMENT in SET */

        aSet.add(4); //Set(1) { 4 }
        aSet.add(5); //Set(2) { 4, 5 }
        aSet.add("anuj"); //Set(3) { 4, 5, 'anuj' }
        aSet.add(arr);//Set(4) { 4, 5, 'anuj', [ 'anuj', 'jha' ] }
        /* 
        aSet.add(arr); Error  Duplicates Array
        */
        aSet.add( ["anuj", "jha"]);
        aSet.add( ["anuj", "jha"]);
        /*  No ERROR they Both are Different Array 
        Set(6) {  4, 5, 'anuj', [ 'anuj', 'jha' ], [ 'anuj', 'jha' ], [ 'anuj', 'jha' ]  }
        */
        console.log(aSet); 



/* CHECK FOR ELEMENT IS PRESENT OR NOT == FIND   */

        if(aSet.has("manoj")){
            console.log(" PRESENT ")
        }else{
            console.log(" ABSENT ")
        }//ABSENT


/* FOR-OF in SET  as they are Iterables  */

        const for_OFF_SET = new Set([1, 2, 3,4,5,6,7,8,9,10]);
        for( let item of for_OFF_SET ){
            console.log(item); // 1 2 3 4 5 6 7 8 9 10
        }

/* LENGTH of SET  */
        const length_SET = new Set([1, 2, 3,4,5,6,7,8,9,10]);
        let length =0;
        for( let item of length_SET ){
            length++; 
        }
        console.log(length) //10



/* -> MAP  
        {   
            MAP is an Iterables , 
            It stores KEY_VALUE pair ( Like Object ), 
            Can't have Duplicate Keys like Objects 
            No index Based Access ,
            Order is Stored Fashion ,
            
        }
/* -> Map  VS Objects 
        {   
            Objects can have string or symbol as key
            while
            Map can use anything as key like array , number , string 
        }
 */

        const person = new Map();
        person.set('name' , 'anuj')//Map(2) { 'name' => 'anuj' }
        person.set('age' , '21') //Map(2) { 'name' => 'anuj', 'age' ='21' }
        person.set(1, 'one') //Map(2) { 'name' => 'anuj', 'age' ='21'1 => 'one'  }
        console.log(person);

        /* console.log(person["name"]); //Undefined 
        console.log(person.name); //Undefined  */

        console.log(person.get('name')); //anuj
        console.log(person.keys()); //[Map Iterator] { 'name', 'age', 1 }


        for( let key of person ){
            console.log(key)
        /* 
            [ 'name', 'anuj' ]
            [ 'age', '21' ]
            [ 1, 'one' ]
            ->  will Give me as Array 
        */
        }


        for( let key of person.keys() ){
            console.log(key)
            /*  name     age     1   */
        }

                
        person.set([1,2,3] , "OneTwoThree") 
        console.log(person);
        /*
            Map(4) {
                'name' => 'anuj',
                'age' => '21',
                1 => 'one',
                [ 1, 2, 3 ] => 'OneTwoThree'
            } 
        */

/* DESTRUCTURING MAP  */

        for( let[ key , value ] of person ){
        console.log([key , value])
            /* 
                [ 'name', 'anuj' ]
                [ 'age', '21' ]
                [ 1, 'one' ]
                [ [ 1, 2, 3 ], 'OneTwoThree' ] 
            */
        }

        const person1 = {
            id:1,
            name : "Anuj"
        }
        const extraINFO = new Map();
        extraINFO.set(person1 , { age : 21 , gender : "male" })
        console.log(extraINFO); 
        //Map(1) { { id: 1, name: 'Anuj' } => { age: 21, gender: 'male' } }
        console.log(person1.id) // 1 

        console.log( extraINFO.get(person1)) //{ age: 21, gender: 'male' }
        console.log( extraINFO.get(person1).age) // 21