// let val;

//  val = document;
//  val = document.all.length;
//  val = document.body;
//  val = document.contentType;
//  val = document.scripts[2].getAttribute('src');
 

// console.log(document.getElementById('task-title').id);

// document.getElementById('task-title').style.background='#000000';
// document.getElementById('task-title').style.padding='5px';
// document.getElementById('task-title').textContent='Text Title';
// document.getElementById('task-title').innertext='Text Title';
// document.getElementById('task-title').innerHTML='<span style="color:red">Text Title</span>';


// document.querySelector

// console.log(document.querySelector('#task-title').id);
// console.log(document.querySelector('.collection-item').className);
// console.log(document.querySelector('li'));
// console.log(document.querySelector('li').style.color='red');
// console.log(document.querySelector('ul li a i'));
// console.log(document.querySelector('li:last-child').style.color='blue');
// console.log(document.querySelector('li:nth-child(3)').style.color='blue');
// console.log(document.querySelector('li:nth-child(4)').style.color='yellow');
// console.log(document.querySelector('li:nth-child(2)').innerText='Hello World');


//document.getElementsByClassName

// let items = document.getElementsByClassName('collection-item');
// items[0].style.color='red';
// items[3].textContent='Hello World';
// console.log(items);

// let listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


//getElementsByTagName

// let items = document.getElementsByTagName('li');
// items[0].style.color='red';
// items[3].textContent='Hello World';
// console.log(items);
// // console.log(typeof items);

// let array_li = Array.from(items);
// array_li.reverse()
// console.log(array_li.reverse());

// array_li.forEach(function(lis, index){
//   console.log(lis);
//   lis.innerText = `${index} : Hello`;
// })


//QuerySelectAll

// const items = document.querySelectorAll('li:nth-child(odd)');
// const item = document.querySelectorAll('li:nth-child(even)');
// console.log(items);

// items.forEach(function(li){
//   li.textContent= 'Hello world'
//   li.style.color= 'yellow';
// })

// for(let i = 0; i< item.length ; i++){
//   item[i].textContent= 'even Hello';
// }

// const list = document.querySelectorAll('li.collection-item');
// console.log(list);


//Traversing the dom
// let val;
// let listItem = document.querySelector('ul.collection');
// let list = document.querySelector('li.collection-item:first-child');
// val = listItem;

// //Get ChildNode
// // val = listItem.childNodes[9].nodeType
// // console.log(val);

// //Get children element
// // val = listItem.children[1].textContent="Hello";
// val = listItem.children[0].children[0]
// val = listItem.firstElementChild.firstElementChild.firstElementChild;


// //count the child element
// val = listItem.childElementCount



// //parent attributes
// val = list.parentElement
// val = list.parentElement.parentElement.id = 'parent';


// //get the siblings
// val = list.nextSibling;
// val = list.nextElementSibling


// //get previous sibling
// // val = list.previousSibling;
// // val = list.previousElementSibling
// // console.log(val);



// //creating text node and append

// let li = document.createElement('li');

// li.className ='collection-item';
// li.id='new-item';
// li.setAttribute('title','New Item')
// li.appendChild(document.createTextNode('Hello World'));
// // console.log(li);

// //create link element 

// let link = document.createElement('a');
// link.className='delete-item secondary-content';
// link.setAttribute('href', '#');
// link.innerHTML='<i class="fa fa-remove"></i>';
// li.appendChild(link);

// //apend li element to ul
// let ul = document.querySelector('ul.collection').appendChild(li);
// // console.log(document.querySelector('ul.collection'));


// //add and replace elements

// let newHeading = document.createElement('h2');
// newHeading.id='task-title';

// newHeading.appendChild(document.createTextNode('Tasks-title'));

// let oldHeading = document.querySelector('h5');
// const cardAction = document.querySelector('.card-action');
// cardAction.replaceChild(newHeading,oldHeading);
//  val = cardAction

// console.log(newHeading);


// //removing element

// const lists = document.querySelectorAll('li');
// const listItems = document.querySelector('ul');

// lists[0].remove();

// listItems.removeChild(lists[3]);


// dealing with class and attributes

// let firstLi = document.querySelector('li:first-child');
//    firstLi.children;
//     link = firstLi.children[0];
//     link = firstLi.children[0].classList[0];
//     link = firstLi.children[0];
 

// link.classList;
// link.classList.add('test');
// link.classList.remove('test')
// val =link;


//addEventListener

// const event = document.querySelector('.clear-tasks').addEventListener('click',Click)
// function Click(e){
//   console.log('Clicked');
//   let val = e;
//   console.log(e);

// }
// let val = e;
// val = e.target
// val = e.target.classList;
// val = e.target.innerHTML = "Hello";
// val = e.target;

//Event type
// val = e.type;


// //timestamp
// val = e.timeStamp

//   console.log(val)


// }

// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');
// const clearBtn = document.querySelector('.clear-tasks');

// clearBtn.addEventListener('click',Onclick);
// clearBtn.addEventListener('mouseup',Onclick);
// clearBtn.addEventListener('dbclick',Onclick);
// clearBtn.addEventListener('mousedown',Onclick);
// clearBtn.addEventListener('mouseover',Onclick);
// clearBtn.addEventListener('mouseenter',Onclick);
// card.addEventListener('mouseleave',Onclick);
// card.addEventListener('mouseenter',Onclick);
// card.addEventListener('mouseout',Onclick);
// card.addEventListener('mouseover',Onclick);
// addEventListener('mousemove',Onclick);



// function Onclick(e){

//   heading.innerText = `MOUSEX ${e.offsetX} : MOUSEY ${e.offsetY}`;
//   heading.style.color='red';
//   document.body.style.backgroundColor= `rgb(${e.offsetX},${e.offsetY},40)`
 
// }


//keyboard and input event

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// let heading = document.querySelector('h5');

// taskInput.value ='';

// form.addEventListener('submit', runEvent);
// taskInput.addEventListener('keydown',runEvent);
// taskInput.addEventListener('keyup',runEvent);
// taskInput.addEventListener('keypress',runEvent);

// taskInput.addEventListener('focus',runEvent);

// taskInput.addEventListener('blur',runEvent);

// taskInput.addEventListener('cut',runEvent);
// taskInput.addEventListener('paste',runEvent);

// taskInput.addEventListener('input',runEvent);


// const cardTitle = document.querySelector('.card-title').addEventListener('click',function(){
//   console.log('cardTitle')
// });

// const cardContent = document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('cardContent')
// });

// const card = document.querySelector('.card').addEventListener('click',function(){
//   console.log('card');
// });

// const col = document.querySelector('.col').addEventListener('click',function(){
//   console.log('col');
// });

// const Deleit = document.querySelector('.delete-item');
// Deleit.addEventListener('click',DeleteItem);

// document.body.addEventListener('click', DeleteItem);



// function DeleteItem(e){
//   // console.log(`EVENT TYPE : ${e.type}`);
//   if(e.target.parentElement.classList.contains('delete-item'))
//   console.log(e.target.parentElement.className)
//   e.target.parentElement.parentElement.remove();

  // console.log(taskInput.value);
  // console.log(e.target.value);
  // heading.innerHTML= taskInput.value;


  // e.preventDefault();
// }

// localStorage.setItem('name', 'Shokunbi')
// sessionStorage.setItem('name', 'Ayodele')


let form = document.querySelector('form').addEventListener('submit',function(e){

  let inputTask = document.getElementById('task').value;

let Tasks;
if(localStorage.getItem('tasks') === null){
  tasks = [];
}
else{
  tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(inputTask);
localStorage.setItem('tasks',JSON.stringify(tasks));
alert('task saved');

  // console.log(inputTask);

})
tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
})














