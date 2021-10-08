

// async function getfunc(){
//   // return 'Hello';
//  const promise = new Promise((resolve, reject) => {
//    setTimeout(resolve('Hello'),1000);
//  });
//  const error = false;

//  if(!error){
//   const res = await promise ; 
//   return res;
//  }
//  else{
//    await promise.error(new Error('something went wrong'));

//  }



// };

// getfunc().
// then(response => console.log(response)
// ).


async function getdata(){
  //wait for response on the fetch call
  const response = await fetch('https://api.github.com/users');

  //and proceed when the promise is resolved
  const data = await response.json();
  return data;
}
getdata()
.then(users => console.log(users));