const input = document.querySelector(`#value`);
const buttton = document.querySelector(`.submit`);
const list = document.querySelector(`#todo-list`);

buttton.addEventListener("click",function (){
    const newItem = document.createElement("li");
    const cButton = document.createElement("button");
    const tButton = document.createElement("button");

    newItem.classList.add(`item`);
    newItem.innerText = input.value;
    input.value="";
    list.appendChild(newItem);

    cButton.classList.add(`check`);
    cButton.innerText = "";
    list.appendChild(cButton);

    tButton.classList.add(`trash`);
    tButton.innerText ="";
    list.appendChild(tButton);
});