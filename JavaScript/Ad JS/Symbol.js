    let id = Symbol("Hello");
    console.log(id);
    console.log(typeof  id );

    let a = Symbol("Anuj");
    let b = Symbol("Anuj");

    // alert( id.toString())

    console.log( a=== b) ;
    let age = Symbol("age");

    let user ={
        name: "anuj",
        // [ age ] : 20,
    }
    user[age] =25;
    for( let key in user){
        console.log(key);
    }

    console.log(user)
    console.log(user.name)
    console.log(user[age])