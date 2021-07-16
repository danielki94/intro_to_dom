// let li1 = document.getElementById('listOne');
// console.log(li1.innerText)

// Event - actions, mouse over , key down, key up, on hover ,on click
// let titleElement = document.getElementById('title');
// titleElement.addEventListener('mouseenter', () => alert('it works'))

let addBtn = document.getElementById('addBtn');
let todoItemField = document.getElementById('todo-item');
let ul = document.getElementById('todo-list-container');
// ul.innerHTML += '<li id="listTwo" class="list-group-item">Item</li>'

function changeActiveClass() {
    this.classList.toggle('active');
}


addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // create the element
    let li = document.createElement('li');

    // set the innerHTML to what's inside the input field
    li.innerHTML = todoItemField.value;

    // Add the classes
    li.classList.add('list-group-item');

    // Add it into the ul
    ul.appendChild(li);

    // Add the toggle event listener
    li.addEventListener('mouseover', changeActiveClass);
    li.addEventListener('mouseleave', changeActiveClass);
    li.addEventListener('click', (e) => {
        li.innerHTML = 'Done';
    });
    li.addEventListener('click', function(e) {
        if(e.target.classList.contains('list-group-item')) {
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'delete';
            deleteBtn.onclick = function() {
                this.parentElement.remove()
            };
            e.target.appendChild(deleteBtn);
        }
    });

    // OR...
    // li1.innerText = todoItemField.value;
    // ul.innerHTML += `<li onmouseover="changeActiveClass(this)" onmouseleave="changeActiveClass(this)" class="list-group-item">${todoItemField.value}</li>`;

    todoItemField.value = '';
    // console.log(todoItemField.value)
})

// page refresh happens automatically when you click add
// turn off page refresh: Event object, to access, pass in as argument in callback function