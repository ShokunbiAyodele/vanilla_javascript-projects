
// Game variable
let min = 1,
    max = 10;
    wininNumber =getRandNum(min,max),
    guessLeft   = 3;
    
    //Ul Element
const game = document.getElementById('game'),
     min_num = document.querySelector('.min-num '),
     max_num = document.querySelector('.max-num '),
     guessInput = document.getElementById('guess-input'),
     guessBtn = document.getElementById('guess-btn'),
     message = document.querySelector('.message');


     min_num.textContent= min;
     max_num.textContent = max;

     //set a play again for user after lost or won
     game.addEventListener('mousedown',function(e){
       if(e.target.className === 'play-again'){
         window.location.reload();
       }
     })

     guessBtn.addEventListener('click',function(){
       let guess = parseInt(guessInput.value);

       if(isNaN(guess) || guess < min || guess > max){
        
        //validate
        setMessage(`your input should not less than ${min} and not greater than ${max}`,'red')
       }

       //check if its winning number  
       if(guess === wininNumber){
         //Game Over   ------WON
         gameOver(true,`YOU Win, the ${wininNumber} is correct`,'green');
       }
       else{
         //its its not winning numnber set winning left and descreases it
         guessLeft -=1;
         if(guessLeft ===0){
           //Game over  - LOST
        gameOver(false,`Game Over.YOU Lost, the winning number is ${wininNumber}`);
         }
         else{

          //clear input
          guessInput.value = '';
           //GAME continue you have number of guesses left
           setMessage(`${guess} is not correct,You have ${guessLeft} guesses left.`,'red')
         }
       }
     });

     function gameOver(won, msg){
       won === true ? color = 'green': color = 'red';
      guessInput.disabled = true;

      //call a set message function
      setMessage(msg,color);

      //set guessBTN to a value play again after game over or won
      guessBtn.value ='Play Again';
      //set guessBTN a class
      guessBtn.className += 'play-again'
     }

     function setMessage(Msg,color='green'){
       //change the text color
       message.style.color =color
       //change the border color
      guessInput.style.borderColor=color
       message.textContent = Msg;
     }

     //get Winning Num
     function getRandNum(min,max){
       return Math.floor(Math.random()* (max-min+1)+min);
     }




