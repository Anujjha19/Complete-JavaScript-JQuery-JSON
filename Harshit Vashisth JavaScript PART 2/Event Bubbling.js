/* In JavaScript, when an event is triggered on a particular element, it can also trigger the same event on all of its parent elements. This process is called event bubbling. 

Event Bubbling:
When an event occurs on a child element, it first runs the event handlers on that child element, then on its parent, then all the way up on other ancestors. This is called event bubbling.
 */

<div id="parent">
    <div id="child">Click me</div>
</div>
// If we add a click event listener to both the parent and child elements, like this:

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

parent.addEventListener('click', () => {
    console.log('Parent clicked');
});

child.addEventListener('click', () => {
    console.log('Child clicked');
});
// Then, if we click on the child element, we will see the following output in the console:

/* 
Child clicked
Parent clicked
This is because the event first triggers on the child element, then bubbles up to the parent element. 
*/

