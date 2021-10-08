
// add event to click and calculate inputs
document.getElementById('loan-form').addEventListener('submit',function(e){

    document.querySelector('#loading').style.display ='block'
   

    //set timeout to display loading
    setTimeout(calculateInputs,2000)


  e.preventDefault();
});

// function displayLoading(){
//   document.querySelector('#loading').style.display ='none'
// }

// functiomn to calculate inputs

function calculateInputs(){
  const text = document.querySelector('span');
  const loanAmount = document.getElementById('amount').value;
  const loanInterest = document.getElementById('interest').value;
  const year = document.getElementById('years').value;

  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(loanAmount);
  const calculatedInterest = parseFloat(loanInterest)/100/12;
  const calculatedPayment   =  parseFloat(year)*12


  //compute monthly payment

  const x = Math.pow(1+calculatedInterest,calculatedPayment);
  const monthly  = (principal *x*calculatedInterest)/(x-1);
if(isFinite(monthly)){
  monthlyPayment.value =  monthly.toFixed(2);
  totalPayment.value   = (monthly *calculatedPayment).toFixed(2);
  totalInterest.value  = ((monthly * calculatedPayment)-principal).toFixed(2);
  //hide loading on displaying the results
  document.querySelector('#loading').style.display ='none';
  document.querySelector('#results').style.display ='block';
 
}
else{
  errorMessage('please insert a number')

}

 
}

function errorMessage(error){
  document.querySelector('#loading').style.display ='none';
  const card = document.querySelector('.card');
  const heading = document.querySelector('h1');

  // create element div
  const div= document.createElement('div');
  
  //append class alert danger
  div.className = 'alert alert-danger';

  //set attribute to display on the left side
  div.setAttribute('align','left');

  //append a textnode
  div.appendChild(document.createTextNode(error));
  card.insertBefore(div,heading)

  //clear error after 3sconds
  setTimeout(clearError, 3000);

}
function clearError(){
  document.querySelector('.alert-danger').remove();
}
