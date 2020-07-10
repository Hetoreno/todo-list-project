const input = document.querySelector(`#value`);
const buttton = document.querySelector(`.submit`);
const list = document.querySelector(`#todo-list`);

buttton.addEventListener("click",function (){
    const newItem = document.createElement("li")

    newItem.classList.add(`item`);
    newItem.innerText = input.value;
    input.value="";
    list.appendChild(newItem);
});