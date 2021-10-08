/*
Easy Http 2 Library for making
Http Request


@Author Abdulfatah
*/

class EasyHTTP{

  //make HTTP GET request
    async get(url){
      const getData = await fetch(url);

      const data = await getData.json();
      return data;

    }

    //make HTTP POST request
    async post(url,data){

      
        const getData = await fetch(url,{
          method: 'POST',
          headers : { 'Content-type': 'application/json'},
          body :   JSON.stringify(data)
        })
        const data = await getData.json();
        return data;     
    }


    //make HTTP PUT request
    async put(url,data){


       const getData = await fetch(url,{
          method: 'PUT',
          headers : { 'Content-type': 'apllication/json'},
          body :   JSON.stringify(data)
        })
   

        const data = await getData.json();
        return data;

    }


    //make HTTP DELETE request
    async delete(url){
       const delData = await fetch(url,{
         method : 'DELETE',
         headers : {
            'Content-type' : 'application/json',
         }       
        });

        const data = await "Resource deleted";
        return data;
    
    }

}