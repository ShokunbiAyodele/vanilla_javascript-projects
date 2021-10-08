const posts =[
  { title : 'post one', body : 'this is post one'},

  { title : 'post two', body : 'this is post two'}
]


//create a createPost function

// function createPost(post, callback){
//   setTimeout(function(){
//     posts.push(post);
//     callback();
//   },2000)
// }
// createPost( { title : 'post three', body : 'this is post three'},getPost)


// //create a  getPost function

// function getPost(){
//   setTimeout(function(){
//     let output ='';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;

//     })
//     document.body.innerHTML = output;
//   },1000)
// }


function createPost(post){

  return new Promise(function(resolve,reject){
    
    setTimeout(function(){
      posts.push(post);
      const error = false;

      if(!error){
        resolve();
      }
      else{
        reject('Error : something went wrong');
      }
    
    },2000)
  })

}
createPost( { title : 'post three', body : 'this is post three'}).then(getPost).catch(function(error){
  console.log(error);
});


//create a  getPost function

function getPost(){
  setTimeout(function(){
    let output ='';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;

    })
    document.body.innerHTML = output;
  },1000)
}

