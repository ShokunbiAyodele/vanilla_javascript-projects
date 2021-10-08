export const person = {
  name : "Abdulfatah Shokunbi",
  email : "shokunbiaa@gmail.com"
}

export function sayHello(){
  return `Hello ${person.name} and send the mail to ${person.email}`;
}

const greeting = "Hello World";
export default greeting;


//in app.js

//ES2015 Module systax
// import {person,sayHello} from './mymodule2';
// import * as mod from './mymodule2';

// import greeting from './mymodule2';

// console.log(mod.person.name);

// console.log(mod.sayHello());;
