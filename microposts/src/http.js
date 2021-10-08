/*
Easy Http 2 Library for making
Http Request


@Author Abdulfatah
*/

class EasyHTTP{

  //make HTTP GET request
    get(url){
      return new Promise((resolve,reject) =>{
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
      });

    }

    //make HTTP POST request
    post(url,data){
      return new Promise((resolve,reject) =>{
        fetch(url,{
          method: 'POST',
          headers : { 'Content-type': 'application/json'},
          body :   JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
      })
      
      
    }


    //make HTTP PUT request
    put(url,data){

      return new Promise((resolve,reject) =>{
        fetch(url,{
          method: 'PUT',
          headers : { 'Content-type': 'application/json'},
          body :   JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
      })
    }


    //make HTTP DELETE request
    delete(url){
      return new Promise((resolve,reject) =>{
        fetch(url,{
          method: 'DELETE',
          headers : { 'Content-type': 'application/json'},
        })
        .then(res => res.json())
        .then( data =>resolve(data))
        .catch(error => reject(error));
      })
    }

}

export const http = new EasyHTTP();