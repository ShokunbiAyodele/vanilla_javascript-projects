document.querySelector('.get-jokes').addEventListener('click',loadEventJokes);

function loadEventJokes(e){

  
  let Number = document.querySelector('input[type="number"]').value;


  //initiate an XHR Http Object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET',`http://api.icndb.com/jokes/random/${Number}`,true);
 
  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);

      let output = '';
      if(response.type === 'success'){
        response.value.forEach(function(joke){

          output +=`
                   <li>${joke.joke}</li>`
        });
      }
      else{
        output +=`
        <li>Something went wrong</li>`
      }
      let UI = document.querySelector('.jokes');
      UI.innerHTML = output;
     
    }


  }

  xhr.send();
  e.preventDefault();
}