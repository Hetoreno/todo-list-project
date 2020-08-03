//Selectors
const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');
const clearButt = document.querySelector('.clear');

//Event Listeners
button.addEventListener("click",addTodo);
list.addEventListener('click' ,deleteCheck);
clearButt.addEventListener('click',clearAll);

//Functions

function addTodo(event){
    event.preventDefault();
    //create DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newLi = document.createElement("li");
    newLi.classList.add('todo-item');
    newLi.innerText = input.value;
    input.value='';
    todoDiv.appendChild(newLi);
    //check mark button
    const check = document.createElement("button");
    check.innerHTML = '<i class= "fas fa-check"> </i>';
    check.classList.add('check-button');
    todoDiv.appendChild(check);
    //trash button
    const trash = document.createElement("button");
    trash.innerHTML = '<i class= "fas fa-trash"> </i>';
    trash.classList.add('trash-button');
    todoDiv.appendChild(trash);
    //append to UL
    list.appendChild(todoDiv);
    input.value='';
}

function deleteCheck(event){
    const clickItem = event.target;
    console.log(clickItem);
//delete todo
    if (clickItem.classList[0] === "trash-button"){
        const todo = clickItem.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
    }
//checking out list
    if (clickItem.classList[0] === "check-button"){
        const todo = clickItem.parentElement;
        todo.classList.toggle('completed');
    }
}


function clearAll(clearE){
    while (list.children.length>0){
        list.removeChild(list.children[0]);
    }
}
