/* Clone Nodes */
const ul = document.querySelector('.todo-list');

const li = document.querySelector('li');

/* li.textContent= " New Todo "
ul.append(li);
ul.prepend(li)  -> Here Any 1 will be done as there is only 1 li */

li.textContent= " New Todo "
const li2 = li.cloneNode(true); // Deep Clonning Including its Child 
ul.append(li);
ul.prepend(li) 