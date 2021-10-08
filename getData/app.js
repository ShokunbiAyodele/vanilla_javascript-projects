document.getElementById('button').addEventListener('click',loadEvent);


function loadEvent(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET','data.txt', true);

  xhr.onprogress = function(){
       if(this.status === 200){
      console.log(this.readyState);
      document.querySelector('#output').innerHTML =`<h1>${this.responseText}</h1>`;
    }
  }

  //for error

  xhr.onerror = function(){
    console.log('Error....')
  }



  // xhr.onload = function(){
  //   if(this.status === 200){
  //     console.log(this.readyState);
  //     document.querySelector('#output').textContent =this.responseText;
  //   }
  // }
  // xhr.onreadystatechange = function(){
  //   if(xhr.status === 200 && xhr,this.readyState === 4){

  //     document.querySelector('#output').textContent =this.responseText;
  //   }
  // }
  xhr.send();
} 