
const URL = "https://jsonplaceholder.typicode.com/posts";
/* 
    fetch(URL)
    .then(response => {  //console.log(response);   // console.log(response.json());
        return response.json();
    })
    .then(data => {
        console.log(data);
    })

    fetch(URL)
    .then(response => { 
        if(response.ok){
        return response.json();
        }
        else{
            throw new Error("something went wrong ")
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch( error => { // If we do not check response.ok and not throw error then the 
                        catch block will not work 
        console.log( "Error in API - Catch Block")
    })

*/

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("inside catch");
        console.log(error);
    })