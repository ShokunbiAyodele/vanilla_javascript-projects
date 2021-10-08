

//get the profiles 

const data = [
  {
    name : 'shokunbi Abdulfatah',
    gender : 'male',
    lookingFor : 'none',
    marital_status : 'married',
    address : 'No 17 west streeet ontario canada',
    image : 'https://randomuser.me/api/portraits/thumb/men/71.jpg'

  },

  {
    name : 'shokunbi Ayodele',
    gender : 'male',
    lookingFor : 'female',
    marital_status : 'single',
    address : 'No 17 west streeet ontario canada',
    image : 'https://randomuser.me/api/portraits/thumb/men/71.jpg'

  },

  {
    name : 'serah williams',
    gender : 'female',
    lookingFor : 'male',
    marital_status : 'single',
    address : 'USA Lead city',
    image : 'https://randomuser.me/api/portraits/thumb/women/71.jpg'

  }
];

const nextName = nameIterator(data);

//get an id of button next
 document.getElementById('next').addEventListener('click',profileName);

 //call first profile 
 profileName();
 function profileName(){
  const nextPointer = nextName.next().value;

  if(nextPointer != undefined){
    const profileDisplay = document.getElementById('profileDisplay');
    const imageDisplay = document.getElementById('imageDisplay');
  
    imageDisplay.innerHTML = `
    <img  src="${nextPointer.image}">
    `;
    profileDisplay.innerHTML =  `
    <ul class="list-group">
    <li class="list-group-item">Name: ${nextPointer.name}</li>
    <li class="list-group-item">Gender: ${nextPointer.gender}</li>
    <li class="list-group-item">Preference: ${nextPointer.lookingFor}</li>
    <li class="list-group-item">Marital Status: ${nextPointer.marital_status}</li>
    <li class="list-group-item">Adddress: ${nextPointer.address}</li>
    </ul>
    `;

  }
  else{
    window.location.reload();
  }
 
 }


function nameIterator(namearray){
  let nextIndex = 0;

  return {
    next : function(){
       return nextIndex < namearray.length ? {value : namearray[nextIndex++], done : false}: {done: true};
    }
  };
}