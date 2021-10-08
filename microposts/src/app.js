import {http} from './http';

import {ui} from './ui';


//get post on DOM LOAD
document.addEventListener('DOMContentLoaded',getPosts);

//listen to add post
document.querySelector('.post-submit').addEventListener('click',subMitPost);

//delete event listener
document.querySelector('#posts').addEventListener('click',deletePost);

//listen for edit state
document.querySelector('#posts').addEventListener('click',editPost);

//listen to cancel button
document.querySelector('.card-form').addEventListener('click',cancelEdit)


//get post from json-server
function getPosts(){
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(error =>console.log(error))
}


//submit post
function subMitPost(){
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  const data = {
    title : title,
    body  : body
  }

  if(title === '' || body === ''){
    ui.showAlert('please fill in the input', 'alert alert-danger');
  }
  else{
    //check if id is there to know its an editatable input
    if(id === null){
         //create post
    http.post('http://localhost:3000/posts',data)
    .then( data => {
      getPosts();
      ui.showAlert('post added successfully','alert alert-success');
      ui.clearInput();
    })
    .catch(error => console.log(error));
    }
    else{
      //update the post
      http.put(`http://localhost:3000/posts/${id}`,data)
    .then( data => {
      ui.showAlert('post updated successfully','alert alert-success');
      ui.changeFormState('add');
      getPosts();
    })
    .catch(error => console.log(error));

    }
  }

}

//delete post
function deletePost(e){
  if(e.target.parentElement.classList.contains('delete')){
   const id = e.target.parentElement.dataset.id;
    if(confirm('Are you sure?')){
      http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('post removed!','alert alert-success');
        getPosts();
      })
      .catch(error => console.log(error));
    }
  }
e.preventDefault();
}

//enable edit state
function editPost(e){
  if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id;
    const title =  e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body =  e.target.parentElement.previousElementSibling.textContent;

    //fill the form with the current form data
    const data = {
      id,
      title,
      body
    }
    //call a filling input option
    ui.fillForm(data);
  }

  e.preventDefault();
}

//cancel the updTE EDIT
function cancelEdit(e){
  if(e.target.classList.contains('post-cancel')){
    ui.changeFormState('add');
  }
  e.preventDefault();
}
