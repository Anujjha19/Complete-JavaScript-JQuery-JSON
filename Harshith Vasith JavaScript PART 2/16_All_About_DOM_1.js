
/* Get Element BY ID  */

    console.log(document.getElementById('main-heading'))
    console.log(typeof (document.getElementById('main-heading')))


/* Get Element BY Class  */

    console.log(document.getElementsByClassName('nav-item'))
    console.log(typeof (document.getElementsByClassName('nav-item')))



    /* Get Element Using Query selector - { for EveryThing  && Gives the First Class or Id }  */

    const mainHeading = (document.querySelector('#main-heading')); //if id then # , if class then .
    console.log(typeof (document.querySelector('#main-heading')))



/* Get Element Using QueryselectorAll - { Return All ID or Class }  */

    const header = document.querySelector('.header')
    console.log(header)

    const list = document.querySelector('.nav-item')
    console.log(list)
    const listsss = document.querySelectorAll('.nav-item')
    console.log(listsss)


/* Change InnerText  &  TextContent  */

    const mainHeading2 = document.getElementById('main-heading')
    console.log(mainHeading2.textContent) // Manage your tasks Hello

    mainHeading2.textContent = " This is Something Else " // This is Something Else
        /* 
            *   TextContent will give you all the Content of Tag even it's not 
                showing on the browser , even it is Hidden by Developer

            *   innerText will give you only the text of your Tag that is      
                ishowing on the browser , if it is Hidden by Developer , it will not show
        */

/*  Change Style of your Page  */

    const mainHeading3= document.querySelector('div.headline h2')
    // console.log(mainHeading3.style)
    mainHeading3.style.color='red';
    mainHeading3.style.backgroundColor = 'aqua'


/*  Get and Set Attributes   */

    const link = document.querySelector('a');
    console.log(link.getAttribute); //#home
    console.log(link.getAttribute('href').slice()); //home

    link.setAttribute('href' , 'https://google.com' )

    const inputElement = document.querySelector('a');
    console.log(inputElement.getAttribute);


/*  To Add and Remove , Toggle Class on any tag */

    const sec= document.querySelector('.section-todo');
    // sec.classList   { to see the list of Class }
    // sec.classList.add( 'bg-dark' )   { added class bg-dark }
    // sec.classList.remove( 'bg-dark' )   {  remove  class bg-dark }
    // sec.classList.contains('container')  { Class exist or Not }
    // sec.classList.toggle('bg-dark')  { Class toggle or not  }


/* Add New HTML Elements to Page  */

        /* Inner HTML to add  HTML Elements to Page  */

            const toDoList = document.querySelector('.todo-list');
            toDoList.innerHTML = toDoList.innerHTML +" <li>  New Todo </li>"
            toDoList.innerHTML = " <li>  New Todo </li>" 
            // In this wat it will be Recuuring and length for multiple elements to add and its not Efficient Too   
        
        

        /* EFFICIENT WAY  { APPENDS Adds to Last of Respective Tags  } */
            const newTodoItem = document.createElement('li');
            const newTodoItemText = document.createTextNode(" Teach Students ")
            // newTodoItem.textContent = " Teach Students "

            // newTodoItemText.appendChild(newTodoItem)
            newTodoItem.append(newTodoItemText)

            const toDoList = document.querySelector('.todo-list');
            toDoList.append(newTodoItem);

            // *** Append Child & Append is Same 
        
        /* { PREPENDS  Adds to Starting of Respective Tags  }  */
            newTodoItem.prepend(newTodoItemText)

        /* { REMOVE  Selected Respective Tags  }  */
            const todo1 = document.querySelector('.todo-list li ');
            todo1.remove()

/* Insert After & Before Elements  */


    const newTodoItem11 = document.createElement('li');
    newTodoItem11.textContent = " Teach Students "

    const toDoList = document.querySelector('.todo-list');
    toDoList.before(newTodoItem11);
    toDoList.after(newTodoItem11);


/* Insert Any-where Between the  Elements  */


    const toDoList = document.querySelector('.todo-list');

    toDoList.insertAdjacentHTML("beforeend" , "<li>Teach Students</li>")
    toDoList.insertAdjacentHTML("afterbegin" , "<li>Teach Students</li>")
    toDoList.insertAdjacentHTML( "afterend" , "<li>Teach Students</li>")
    toDoList.insertAdjacentHTML( "beforebegin" , "<li>Teach Students</li>")


/* Clone Nodes */

        const ul = document.querySelector('.todo-list');
        const li = document.querySelector('li');

            /* li.textContent= " New Todo "
            ul.append(li);
            ul.prepend(li)  -> Here Any 1 will be done as there is only 1 li */

        li.textContent= " New Todo "
        const li2 = li.cloneNode(true); // Deep Clonning Including its Child 
        ul.append(li);
        ul.prepend(li2) 


