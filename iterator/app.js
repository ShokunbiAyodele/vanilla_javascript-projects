/// Iterator Example

function NameIterator(names){
  let nameIndex = 0;

  return {
    next : function(){
      return nameIndex < names.length ?
      {value : names[nameIndex++],done : false} : {done : true};
    }
  }
}

nameArr = ['Ayodele', 'Abdulfatah','Adio'];

names = NameIterator(nameArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());


//Generator Examples
function* sayName(){

  yield 'Ayodele';
  yield 'Abdulfatah';
  yield 'Adio';
}

namesgenerator = sayName();
console.log(namesgenerator.next().value);
console.log(namesgenerator.next().value);
console.log(namesgenerator.next().value);
console.log(namesgenerator.next());