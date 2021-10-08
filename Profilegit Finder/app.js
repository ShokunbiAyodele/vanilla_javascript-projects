  //instatiate a UI class
const ui = new UI();



//search Imput
const searchUser = document.getElementById('searchUser');

//search input event listner
searchUser.addEventListener('keyup', (e) => {

  //get user Text
  const userText = e.target.value;

  if(userText !== ''){
    //make http call
    const github = new Github();
    github.getUser(userText).
    then(data => {
      if(data.profile.message === 'Not Found'){
        //create an alert
        ui.showAlert('User Not found', 'alert alert-danger')
      }
      else{
        //show profile
      
        //create a UI object
        ui.showProfile(data.profile);
        ui.showRepo(data.repos);

      }
    })

  }
  else{
    //clear the profile
    ui.clearProfile();

  }

 

})