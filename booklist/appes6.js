class Book{

  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn  = isbn

  }
}


class  UI{

  addBookToList(book){
    //create tr element 
    const row = document.createElement('tr');

    row.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete">X</></td>`

    const bookList =document.getElementById('book-list');
    bookList.appendChild(row);

  }

  cleaAllField(){
      //clear input field
   document.getElementById('title').value ='';
   document.getElementById('author').value ='';
   document.getElementById('isbn').value ='';

  }

  showAlert(message,className){
    //create a div element 
    const div = document.createElement('div');
    div.className = `alert ${className}`;

    //create a textNode message
    div.appendChild(document.createTextNode(message));

    //get a parent all parent element container
    const container = document.querySelector('.container');
    const bookForm =  document.getElementById('book-form');
    container.insertBefore(div,bookForm);

    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }
  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }

  }

}

//Store Input field in LS
class Store{

  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }
    else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;

  }

  static displayBooks(){
    let Books = Store.getBooks();

    Books.forEach(function(book){
      const ui = new UI();
      ui.addBookToList(book);

    })

  }

  static storeBooks(book){

    let Books = Store.getBooks();

    Books.push(book);

    localStorage.setItem('books',JSON.stringify(Books));
  }

  static removeBooks(isbn){
    let Books = Store.getBooks();
    Books.forEach(function(book,index){
      if(book.isbn === isbn){
        Books.splice(index,1)
      }
    });
    localStorage.setItem('books',JSON.stringify(Books));

  }
}

//display book to UI
document.addEventListener('DOMContentLoaded',Store.displayBooks);

//add book inventlistner
document.getElementById('book-form').addEventListener('submit',function(e){


  //get input field value
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn   = document.getElementById('isbn').value;


  //instatiate book object to add book
  const book = new Book(title,author,isbn);

   //instatiate UI object for UI operation
  const ui = new UI()

  if(title === '' || author === '' || isbn === ''){
    
    ui.showAlert('please enter input field', 'error');
  }
  else{
     //call a method to store book
  ui.addBookToList(book)
  Store.storeBooks(book);
  ui.showAlert('store to LS! successfully','success');

  //call clearfeild method
  ui.cleaAllField()

  }

  e.preventDefault();
});


//bookdelete event listner

document.getElementById('book-list').addEventListener('click',function(e){
   //instatiate UI object for UI operation
   const ui = new UI()
   ui.deleteBook(e.target);

    //Delete from LS
    Store.removeBooks(e.target.parentElement.previousElementSibling.textContent)
    
   ui.showAlert('book! deleted successfully', 'success');

  ;

e.preventDefault();
});