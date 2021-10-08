//declaring variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const Filter  = document.querySelector('#filter');
const taskInput  = document.querySelector('#task');

//call loadEventListeners

loadEventListenrs();

function loadEventListenrs(){
  form.addEventListener('submit',addTask);

  //remove task even
  taskList.addEventListener('click',removeTask)

  // get LS content and append
  document.addEventListener('DOMContentLoaded', getTASK);

  //clear all tasks
  clearBtn.addEventListener('click',clreaTask)

  //filter input text
  Filter.addEventListener('keyup',filterTask)
}

function addTask(e){
  if(taskInput.value === ''){
    alert('add a task')

  }

  e.preventDefault();
  //create li
  const li = document.createElement('li');

  //add a class
  li.className ="collection-item";

  //create a textNode and Append

  li.appendChild(document.createTextNode(taskInput.value));
  
  //create element a 
  const link = document.createElement('a');

  //add a class
  link.className ="delete-item secondary-content";
  // add element to a tag
  link.innerHTML ='<i class=" fa fa-remove"></i>';

  //append link to li

  li.appendChild(link);

  //append li to ul collection

  taskList.appendChild(li);

  storeInputToLocalStorage(taskInput.value);
  taskInput.value = ''

  // console.log(taskList);

}
function storeInputToLocalStorage(input){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(input);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

//get task and append to ui element
function getTASK(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(taskli){
    //create li
  const li = document.createElement('li');

  //add a class
  li.className ="collection-item";

  //create a textNode and Append

  li.appendChild(document.createTextNode(taskli));
  
  //create element a 
  const link = document.createElement('a');

  //add a class
  link.className ="delete-item secondary-content";
  // add element to a tag
  link.innerHTML ='<i class=" fa fa-remove"></i>';

  //append link to li

  li.appendChild(link);

  //append li to ul collection

  taskList.appendChild(li);

  });

}




function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm('Are you sure')){
    e.target.parentElement.parentElement.remove();

    removeTaskFromLS(e.target.parentElement.parentElement);
  }
}
}
function removeTaskFromLS(LSTask){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
    tasks.forEach(function(tasklist, index){
      if(LSTask.textContent === tasklist){
        tasks.splice(index, 1)
      }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks))
    
  }
 

function clreaTask(){
//  taskList.innerHTML =''
//  taskList.firstChild =''
while(taskList.firstChild){
  taskList.firstChild.remove()
}

//function to clear all tasks
// clearTaskFromLocalStorage();
}

// function clearTaskFromLocalStorage(){
//   localStorage.clear();
// }

function filterTask(e){
  const inputs = e.target.value.toLowerCase();
  console.log(inputs);
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent.toLowerCase();

    if(item.indexOf(inputs) != -1){
      task.style.display = 'block';
    }
    else{
      task.style.display = 'none';
    }
  });

}


