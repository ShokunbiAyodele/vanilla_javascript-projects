class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
          <div class="col-md-3">
          <img class="img-fluid mb-2"  src="${user.avatar_url}">
          <a href=""${user.html_url} target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
         
          <br><br>
          <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Websites/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
          </div>
      </div>
    </div>
    <h3 class=""page-heading mb-3>Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showRepo(Repos){
    let output = '';
    Repos.forEach(repo => {

      output += `<div class="card card-body mb-2">
                  <div class="row">
                  <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a> 
                  </div> 
                  <div class="col-md-6">
                  <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge badge-success">Forks: ${repo.forks_count}</span>       
                  </div>    
                  </div>
      
                </div>`;
    });
    //outpit repo
    document.getElementById('repos').innerHTML = output;
  }


  clearProfile(){
    this.profile.innerHTML = '';
  }

  showAlert(message, className){
    //clear 
    this.clearAlert();
    //create a div element for alert
    const div = document.createElement('div');
    //create a class for the div
    div.className = className;
    //create text node and append child
    div.appendChild(document.createTextNode(message));

    //get Parent 
    const container = document.querySelector('.searchContainer');
    const search =  document.querySelector('.search');
    //insert the alert in the container
    container.insertBefore(div,search);

    //clear alert after 3 seconds
    setTimeout(()=> {
      this.clearAlert();
    },3000)
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
}