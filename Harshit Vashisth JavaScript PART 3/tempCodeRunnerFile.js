const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL )
    .then( response => {
        // console.log(response);
        // console.log(response.json());
        return response.json();
    })
    .then( data => {
        console.log(data);
    })