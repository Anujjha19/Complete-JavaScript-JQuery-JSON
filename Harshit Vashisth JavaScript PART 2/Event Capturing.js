/* 
On the other hand, event capturing is the opposite of event bubbling. It starts from the topmost parent element and goes down to the target element.

Event Capturing:
Event capturing is the opposite of event bubbling. It starts from the topmost parent element and goes down to the target element.
*/

// To use event capturing, we need to set the third parameter of the addEventListener method to true, like this:


parent.addEventListener('click', () => {
    console.log('Parent clicked');
}, true);

child.addEventListener('click', () => {
    console.log('Child clicked');
}, true);
// Now, if we click on the child element, we will see the following output in the console:

/* 
Parent clicked
Child clicked
This is because the event first triggers on the parent element, then captures down to the child element.
*/