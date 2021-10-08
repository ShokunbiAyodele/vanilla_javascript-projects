

//STANDARD MODULE PATTERN
 
// const changeText =(function(){
//   //private declaration here

//   let text = "Hello World";


//   const privateText = function(){
//     document.getElementById('changethistEXT').textContent = text;
//   }


//   return {
//      generalText : function(){

//       privateText();
//       console.log(text);

//     }
//   }
// })()

// changeText.generalText();   

//REVEILING MODULE PATTERN

const  RMPText =(function(){
   let data =[];

  function add(item){
     data.push(item);
     console.log("item added");

   }

  function get(id){
    return data.find(item => {
      item.id === id;
    });
   }
   return {
    add : add,
    get : get
  }


})();
RMPText.get({id : 1, name : 'Ayo'});
