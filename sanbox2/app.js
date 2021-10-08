
// //JavaScript OOP

// function Person(firstName,lastName,dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function(){
//   //   const diff = Date.now() - this.birthday;
//   //   const getAge = new Date(diff);
//   //   return getAge.getUTCFullYear() - 1970
//   // }

// }
// //calculate age with prototype
//   Person.prototype.calculateAge = function(){
//   const diff = Date.now() - this.birthday;
//   const getAge = new Date(diff);
//   return getAge.getUTCFullYear() - 1970
// }

// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }

// //get married method

// Person.prototype.getMarried = function(newName){
//   this.lastName = newName;
// }

// const Ayodele = new Person('Ayodele','Shokunbi','12-12-1988');
// const Abdulfatah = new Person('Abdulfatah','Shokunbi','12-12-1988');

// console.log(Abdulfatah);

// console.log(Ayodele.calculateAge());

// console.log(Abdulfatah.getFullName());

// //call getMarried to change the name
// Abdulfatah.getMarried('Williams');

// console.log(Abdulfatah.getFullName());

// console.log(Abdulfatah.hasOwnProperty('birthday'))



//ptototype inheritance

// function Person(firstName, lastName){

//   this.firstName = firstName;
//   this.lastName  = lastName;

// }
// Person.prototype.greeting = function(){
//   return `hey there, ${this.firstName} ${this.lastName}`;
// }

// let person1 = new Person('Abdulfatah', 'Shokunbi');
// console.log(person1.greeting());


// function Customer(firstName,lastName,phone, membership){
//   Person.call(this,firstName,lastName);
//   this.phone = phone;
//   this.membership = membership

// }


// //inheriting Person prototype method
// Customer.prototype = Object.create(Person.prototype);

// //make Customer prototype return customer
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Ayo','Williams','08027618122','standard');
// // console.log(customer1);

// //Customer greeeting to override Person greeting
// Customer.prototype.greeting = function(){
//   return `Hello, ${this.firstName} ${this.lastName}, welcome to our company`; 
// }

// console.log(customer1.greeting());



// uSING Object.create

// const PersonProtoTypes = {
//   greeting : function(){
//     return `Hello ${this.firstName} ${this.lastName}`;
//   },
//   getMarried :function(newName){
//     return this.lastName = newName;
//   }

// }
// // PersonProtoTypes.getMarried =function(newName){
// //   return this.lastName = newName;
// // }

// let ayo = Object.create(PersonProtoTypes,{
//   firstName : {value : 'Ayodele'},
//   lastName  : {value : 'Modiu'},
//   age        : {value :  30}
// });

// const Abdulfatah = Object.create(PersonProtoTypes);
// Abdulfatah.firstName = 'Abdulafatah';
// Abdulfatah.lastName  = 'Shokunbi';
// Abdulfatah.age       = 35;

// Abdulfatah.getMarried('Williams');

// console.log(Abdulfatah.greeting())

// console.log(ayo.greeting());



//ES6 CLASSES

// class Person{

//   constructor(firstName,lastName,dob){

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthDay = new Date(dob)
//   }
//   calculateAge = function(){
//     const diff = Date.now() - this.birthDay;
//     const ageDay = new Date(diff);
//     return ageDay.getUTCFullYear()-1970;
//   }
//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }


//   getMarried = function(NewLastName){
//     this.lastName = NewLastName;
//   } 
//   static addAge(x,y){
//     return x+y;
//   }
// }


// const Fatimah = new Person('Fatima','Modiu','12-12-1986');
// Fatimah.getMarried('Shokunbi');



// const Alimah = new Person('Alimah','Oguntoyinbo','12-12-1990');
// Alimah.getMarried('Abdulraheem');

// console.log(Alimah);
// console.log(Alimah.calculateAge());
// console.log(Alimah.greeting());

// console.log(Fatimah);

// console.log(Fatimah.calculateAge());

// console.log(Person.addAge(2,5))


//ES6 CLASS INHERITANCE

class Person{

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName  = lastName;
  }

  greeting(){
    return `hello there, ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person{
  constructor(firstName, lastName,phone,membership){
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getInteger(){
    return 567
  }
}

const person1 = new Person('Fatima','Modiu');
console.log(person1);

const customer1 = new Customer('Ayodele','Shokunbi','08027618122','standard');

console.log(customer1);

console.log(customer1.greeting());

console.log(Customer.getInteger());






