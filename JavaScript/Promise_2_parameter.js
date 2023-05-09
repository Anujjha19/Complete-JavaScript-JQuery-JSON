//  src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js">


function prom(a , b) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching Data , Please Wait ");
        var c = a/b;
        setTimeout(() => {
            if (a,b) {
                resolve(` Your Answer : ${c}`);
            }
            else {
                reject(" Failed To Calculate");
            }
        }, 1000)
    });
}

prom(5,0).then((result) =>{
    console.log(result)}).catch((error) =>{
        console.log(error)}); 

