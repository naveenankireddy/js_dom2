
let input = document.querySelector("input[type ='text']");
let id = 475647543;
let ul = document.querySelector('ul');
let left = document.querySelector('.left');
let all = document.querySelector('.all');
let completed = document.querySelector('.completed');
let active = document.querySelector('.active');
let clear = document.querySelector('.clear');






let sst = [];



function addTodo(event){
    if(event.keyCode === 13){
        const obj = {
            text:input.value,
            checked:false,
            id : id++,
        };
        sst.push(obj);
        createUI(sst);
        input.value = "";
    }
};

function deleteTodo(event){
    let id = event.target.parentElement.dataset.uid; 
    sst = sst.filter(todo => todo.id != id);
    createUI(sst);
    
}
function toggleTodo(event){
    let id = event.target.parentElement.dataset.uid; 
    sst = sst.map(todo => {
        if(todo.id == id){
            todo.checked = !todo.checked
        }
        return todo;
    });
    createUI(sst);
    
}

function itemsLeft(){
    let itemsLeft = sst.filter(todo => !todo.checked);
    left.innerText = `${itemsLeft.length} items left`
}

function createUI(todos=[]){
ul.innerHTML = "";
todos.forEach(todo => {
 let li = document.createElement('li');
 li.setAttribute("data-uid" , todo.id)
 let input = document.createElement('input');
 input.type = "checkbox";
 input.addEventListener("click" , toggleTodo);
 input.checked = todo.checked;
 let p = document.createElement('p');
 p.innerText = todo.text;
 let span = document.createElement('span');
 span.innerText = "X"
 span.addEventListener("click", deleteTodo);
 li.append(input,p,span);
 ul.append(li);


});
itemsLeft();
console.log(sst , "createUI ")
}
createUI(sst);

input.addEventListener("keyup",addTodo)
completed.addEventListener("click" , () =>{
    let completedTodo = sst.filter(todo => todo.checked);
    createUI(completedTodo);
})
all.addEventListener("click" , () =>{

    createUI(sst);
})
active.addEventListener("click" , () =>{
    let activeTodo = sst.filter(todo => !todo.checked);
    createUI(activeTodo);
})
clear.addEventListener("click" , () =>{
    sst = sst.filter(todo => !todo.checked);
    createUI(sst);
})

