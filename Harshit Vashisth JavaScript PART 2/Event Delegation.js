/* Event delegation is a technique in JavaScript where instead of adding an event listener to each individual element, we add a single event listener to a parent element that listens for events on its child elements. This can be useful when we have a large number of child elements that need to have the same event listener attached to them.

 */
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
// Instead of adding an event listener to each li element, we can add a single event listener to the ul element that listens for clicks on its child li elements:

const myList = document.querySelector('#myList');

myList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked on ${event.target.textContent}`);
    }
});
// In this example, we're using event delegation to listen for click events on the ul element. When a click event occurs, we check if the target element is an li element. If it is, we log a message to the console with the text content of the clicked li element.

// By using event delegation, we only need to add a single event listener to the ul element instead of adding one to each li element. This can make our code more efficient and easier to maintain.

