
//load customer

document.getElementById('button1').addEventListener('click',loadCustomer);

function loadCustomer(e){


  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET','customer.json',true);

  xhr.onload = function(){
    if(this.status === 200){

      console.log(this.responseText);
    }
  

    const customer = JSON.parse(this.responseText);

    let output =  `<ul>
                   <li>${customer.id}</li>
                   <li>${customer.name}</li>
                   <li>${customer.company}</li>
                   <li>${customer.phone}</li>
                   <li>${customer.email}</li>
                   </ul>`

    document.getElementById('customer').innerHTML=output;

    
  }
  xhr.send();
}

//load customers

document.getElementById('button2').addEventListener('click',loadCustomers);


function loadCustomers(e){

  xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET','customers.json',true);

  xhr.onload = function(){
    let output = '';

    const customers = JSON.parse(this.responseText);

    customers.forEach(function(customer){

     output +=  `<ul>
      <li>${customer.id}</li>
      <li>${customer.name}</li>
      <li>${customer.company}</li>
      <li>${customer.phone}</li>
      <li>${customer.email}</li>
      </ul>`
    })

    document.getElementById('customers').innerHTML= output;

  }

  xhr.send();
}