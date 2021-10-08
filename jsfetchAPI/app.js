
//get text from a local file

document.getElementById('button1').addEventListener('click',getText);

function getText(){
  fetch('text.txt')
  .then(res => res.text()
  )
  .then(data=>{

    document.getElementById('output').innerText = data;
  })
  .catch(err=>document.getElementById('output').innerText =err
  )
}

//get json from a local file
document.getElementById('button2').addEventListener('click',getJson);

function getJson(){
  fetch('post.json')
  .then(function(res){
    return res.json();
  }).then(function(data){
    //loop thru the data
    let output = '';
    data.forEach(function(value){
      output += `<li>${value.tittle}</li>`;
    })
    document.getElementById('output').innerHTML = output;
  }).catch(function(err){
    console.log(err);
  })
}



//get json from a external file
document.getElementById('button3').addEventListener('click',getJsonExternal);


function getJsonExternal(){
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    let output = '';
    data.forEach(function(value){
      output += `<li>${value.url}</li>`
    })
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    document.getElementById('output').innerHTML = err;
  })
}

function showError(res){
  if(!res.ok){
    throw new Error(res.error);
  }
  return res;
}

