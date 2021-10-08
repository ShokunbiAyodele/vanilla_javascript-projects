//Book Constructor
function Book(title, author,isbn){

  this.title = title;
  this.author = author;
  this.isbn   = isbn;

}

//UI Constructor
function UI(){}

//add book to List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML =`<td>${book.title}</td>
                   <td>${book.author}</td>
                   <td>${book.isbn}</td>
                   <td><a href="#" class="delete">X</a></td>`;

list.appendChild(row);

}

//clear fields
UI.prototype.cleaAllField = function(){
   document.getElementById('title').value ='';
   document.getElementById('author').value ='';
   document.getElementById('isbn').value ='';

}

//add show alert prototype
UI.prototype.showAlert = function(message,className){
  //create a div element
  const div = document.createElement('div');
  
  //add a class name
  div.className =`alert ${className}`;

  //add Text
  div.appendChild(document.createTextNode(message));

  //get a parent element
  const container = document.querySelector('.container');

  //get a child element 
  const form = document.getElementById('book-form');

  //inset alert before the form element
  container.insertBefore(div,form);

  //set timeout
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000)
}

//deleteBook prototype
UI.prototype.deleteBook = function(target){
  if(target.className == 'delete'){
    target.parentElement.parentElement.remove();
  }
}

//store book to LS
UI.prototype.storeBook = function(book){
  let Books;
  if(localStorage.getItem('Books')=== null){
    Books = [];
  }
  else{
    Books = JSON.parse(localStorage.getItem('Books'))
  }
  Books.push(book);
  localStorage.setItem('Books',JSON.stringify(Books));
}

//display Books from LS
UI.prototype.displayBook = function(){
  let Books;
  if(localStorage.getItem('Books')=== null){
    Books = [];
  }
  else{
    Books = JSON.parse(localStorage.getItem('Books'))
  }
  Books.forEach(function(book){
    const ui = new UI();
    ui.addBookToList(book);
  })
 ;


}

//deletebook from LS
UI.prototype.deleteBookLS = function(isbn){
  let Books;
  if(localStorage.getItem('Books')=== null){
    Books = [];
  }
  else{
    Books = JSON.parse(localStorage.getItem('Books'))
  }
  Books.forEach(function(book,index){
    if(book.isbn === isbn){
      Books.splice(index, 1);
    }
  });
  localStorage.setItem('Books',JSON.stringify(Books));
}

//create display Book event Listners
let ui = new UI()
document.addEventListener('DOMContentLoaded',ui.displayBook);

//create evenlisters to add field
document.getElementById('book-form').addEventListener('submit',function(e){

  //get all input
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;


  // instatiate Book object\
  const book = new Book(title,author,isbn);

  //instatiate UI Object
  const ui = new UI();

  if(title === '' || author === '' || isbn ===''){
    ui.showAlert('please fill in all field','error');
  }
  else{

      //call UI prototype
  ui.addBookToList(book);
  //store Book to LS
  ui.storeBook(book);

  ui.showAlert('book added successfully','success');

  //clear all field
  ui.cleaAllField()

  }

  e.preventDefault();
})

//deleteBook event listener
document.getElementById('book-list').addEventListener('click',function(e){
   //instatiate UI Object
   const ui = new UI();
   ui.deleteBook(e.target);

   //call deletefrom LS method
   ui.deleteBookLS(e.target.parentElement.previousElementSibling.textContent);
   //add alert
   ui.showAlert('book successfully deleted','success');

  e.preventDefault()
})