const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts/',function(err,response){
 
  if(err){
    console.log(err);
  }
  else{
    console.log(response);
  }
});


const data = {
  title : "post",
  body  : "this is a last post"
}

//create post

http.post('https://jsonplaceholder.typicode.com/posts/',data,function(post,err){

  if(err){
    console.log(err);
  }
  else{
    console.log(post);
  }

});


//create a put post
http.put('https://jsonplaceholder.typicode.com/posts/5',data,function(post,err){

  if(err){
    console.log(err);
  }
  else{
    console.log(post);
  }

});


//create a delete post

// http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(response);
//   }
// });

