// calling get function and passing the url
const http = new EasyHTTP;

// const response = http.get('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//   response.forEach(res => console.log(res.name))
// })
// .catch(error   => console.log(error));



//making post request
const data = {
  name : 'shokunbi abdfulfatah',
  username : '08027618122',
  email : 'shokunbiaa@gmail.com'
}

// const response = http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(response => console.log(response))
// .catch(error   => console.log(error));



// const response = http.put('https://jsonplaceholder.typicode.com/users/7',data)
// .then(response => console.log(response))
// .catch(error   => console.log(error));



const response = http.put('https://jsonplaceholder.typicode.com/users/7')
.then(response => console.log(response))
.catch(error   => console.log(error));