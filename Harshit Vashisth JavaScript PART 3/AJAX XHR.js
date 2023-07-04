//XHR - XML HTTP REQUEST

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

// step1
// console.log(xhr.readyState); //0 before open 

xhr.open("GET", URL);

// console.log(xhr.readyState); //1 after open 
//2 send has called , 3 loading downloading response , 4 operation complete 

/* console.log(xhr.readyState);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        console.log(xhr)
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(typeof data);
    }
} */
//4 directly 
xhr.onload = function () {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();

