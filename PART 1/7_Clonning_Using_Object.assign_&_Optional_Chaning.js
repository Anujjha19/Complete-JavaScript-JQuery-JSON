//Clone Using Onject.assign

    const obj1 = {
        key1: "Value 1 ",
        key2: "Value 2 ",
    }
    const obj2 = obj1; //Both Will have same address inside HEAP Memory

    console.log(obj1);
    console.log(obj2)
    /* 
    { key1: 'Value 1 ', key2: 'Value 2 ', key3: 'Value 3 ' }
    { key1: 'Value 1 ', key2: 'Value 2 ', key3: 'Value 3 ' }
    */
    obj1.key3 = "Value 3 ";
    console.log(obj1);
    console.log(obj2)
    /* {
        key1: 'Value 1 ',
        key2: 'Value 2 ',
        key3: 'Value 3 '
    }
    {
        key1: 'Value 1 ',
        key2: 'Value 2 ',
        key3: 'Value 3 '
    } */


// CLONE


/*  To Avoid this We Need to CLONE IT using SPREAD Operator or ASSIGN   */
            const obj3 = { ...obj1 };
            obj3.key4 = "Value 4 ";
            console.log(obj3)
            console.log(obj1)
                /* 
                    {
                    key1: 'Value 1 ',
                    key2: 'Value 2 ',
                    key3: 'Value 3 ',
                    key4: 'Value 4 '
                    }
                    { key1: 'Value 1 ', key2: 'Value 2 ', key3: 'Value 3 ' }
                */

            const obj_Assign = Object.assign({}, obj1)
            console.log(obj_Assign)
                // { key1: 'Value 1 ', key2: 'Value 2 ', key3: 'Value 3 ' }


/*  OPTIONAL CHAINING  */

            const user ={
                name :"anuj",
                //address : { houseNo : '19A'}
            }
            console.log(user?.name)
            console.log(user?.address?.houseNo) // undefined

            let user1;

            console.log(user?.name) // undefined
            console.log(user.name) // ERROR cannot read Object Property 
            console.log(user?.address?.houseNo) // undefined
