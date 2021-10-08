class UI{
  constructor(){
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput  = document.querySelector('#body');
    this.idInput  = document.querySelector('#id');
    this.postSubmit  = document.querySelector('.post-submit');
    this.forState    = 'add';
  }

  showPosts(posts){
    let output='';
    posts.forEach( post => {
      output += `
      <div class="card mb-3">
      <div class="card-body">
      <h4 class="card-title">${post.title}</h4>
      <p class="card-text">${post.body}</p>
      <a href="#" class="edit card-link" data-id="${post.id}"><i class="fa fa-pencil"></i></a>
      <a href="#" class="delete card-link" data-id="${post.id}"><i class="fa fa-remove"></i></a>
      </div>
      </div>
      
      `
    })
    this.post.innerHTML = output;
  }
  showAlert(message, className){
    //create element 
    const div = document.createElement('div');

    //create class
    div.className = className;

    //create a child node
    div.appendChild(document.createTextNode(message));

    //get the container
    const container = document.querySelector('.postsContainer');
    //get post
    const posts = document.querySelector('#posts');

    //apend div
    container.insertBefore(div,posts);

    //set timeout
    setTimeout(()=>{
      this.clearAlert();
    },3000)
  }
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
  clearidInput(){
    this.idInput.value = '';
  }

  clearInput(){
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  //fill form edit
  fillForm(data){
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;
    
    //edit state function
    this.changeFormState('edit');
   
  }

  //change form state
  changeFormState(type){
    if(type === 'edit'){
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      //create cancel button
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      //get the parent
      const card = document.querySelector('.card-form');

      //get the element to insert before
      const formEnd = document.querySelector('.form-end');

      //insert the cancel button
      card.insertBefore(button,formEnd);
    }
    else{
      this.postSubmit.textContent = 'Post it';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      //remove the cancel button if its there
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove();
      }
      //clear the id on the hidden field
      this.clearidInput();
      //clear field
      this.clearInput();

    }
  }
}


export const ui = new UI();