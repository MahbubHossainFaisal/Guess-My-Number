'use strict';

//To get a number between 1 to 100
//Math.random()*20 will generate float values from 0-99
//Math.trunc() will convert them to int
//+1 is done because to get value between 1-100

let secretNumber = Math.trunc((Math.random()*100))+1


//Score value
let score = 20;
let highscore = 0;
const displayMessage = (message) =>{
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', ()=> {
    let getGuessValue = document.querySelector('.guess').value; // this will give a string value.
    // If we want a number from it we have to use number function to convert the string into number
    getGuessValue=Number(getGuessValue)
    console.log(getGuessValue);
    //No value
    if(!getGuessValue){
       // document.querySelector('.message').textContent = '🥺 No Number!!!!'
       displayMessage('🥺 No Number!!!!')
    }
    //Correct Answer
     else if(getGuessValue === secretNumber){
        //document.querySelector('.message').textContent = '🥰 Correct!!!!' 
        displayMessage('🥰 Correct!!!!' )
        document.querySelector('.number').textContent = secretNumber;

        //Adding HighScore
        if(score>highscore){
            highscore=score;
        }
        document.querySelector('.highscore').textContent = highscore;
    
        //changing body background color when winning
        document.querySelector('body').style.backgroundColor = '#006400'
        //changing number value width
        document.querySelector('.number').style.width = '30rem'
    }
    //When guess is almost close
    else if(getGuessValue > secretNumber && getGuessValue < secretNumber+5 || getGuessValue < secretNumber && getGuessValue > secretNumber-5){
        if(score> 0){
        //document.querySelector('.message').textContent = '😘 Allmost there'
        displayMessage('😘 Allmost there')
        score--;
        if(score <= 0){
            score =0;
           // document.querySelector('.message').textContent = '😭 You lost the game!!!'
           displayMessage('😭 You lost the game!!!')
        }
        document.querySelector('.score').textContent = score;
        } else{
            //document.querySelector('.message').textContent = '😭 You lost the game!!!'
            displayMessage('😭 You lost the game!!!')
        }
    }
    //When guess is closer
    else if(getGuessValue > secretNumber && getGuessValue < secretNumber+10 || getGuessValue < secretNumber && getGuessValue > secretNumber-10){
       if(score > 0){
       // document.querySelector('.message').textContent = '🤑 Just A Little Bit More or Less!'
       displayMessage('🤑 Just A Little Bit More or Less!')
        score--;
        if(score <= 0){
            score =0;
            //document.querySelector('.message').textContent = '😭 You lost the game!!!'
            displayMessage('😭 You lost the game!!!')
        }
        document.querySelector('.score').textContent = score;
       } else{
            //document.querySelector('.message').textContent = '😭 You lost the game!!!'
            displayMessage('😭 You lost the game!!!')
        }
    }
    //When guess is between secret number and 2*secretnumber
    else if(getGuessValue > secretNumber && getGuessValue <= 2*secretNumber || getGuessValue < secretNumber && getGuessValue>= 0.5*secretNumber){
        if(score > 0 ){
       // document.querySelector('.message').textContent = getGuessValue > secretNumber ? '😛 A Bit High!' : '😛 A Bit Low!'
       displayMessage(getGuessValue > secretNumber ? '😛 A Bit High!' : '😛 A Bit Low!') 

        score--;
        if(score <= 0){
            score =0;
            //document.querySelector('.message').textContent = '😭 You lost the game!!!'
            displayMessage('😭 You lost the game!!!')
        }
        document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = '😭 You lost the game!!!'
            displayMessage('😭 You lost the game!!!')
        }
    } 
    //When guess is between 2*secretnumber and 4*secretnumber
    
    else if(getGuessValue > 2*secretNumber && getGuessValue <= 4*secretNumber || getGuessValue < 0.5*secretNumber && getGuessValue >= 0.25*secretNumber){
        if(score> 0){
        //document.querySelector('.message').textContent = getGuessValue > secretNumber ?'🤨 Much High!': '🤨 Much Low!'
        displayMessage(getGuessValue > secretNumber ?'🤨 Much High!': '🤨 Much Low!')
        score=score-2;
        if(score <= 0){
            score =0;
           // document.querySelector('.message').textContent = '😭 You lost the game!!!'
           displayMessage('😭 You lost the game!!!')
        }
        document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😭 You lost the game!!!'
            displayMessage('😭 You lost the game!!!')
        }
        
    }
    //When guess is greater than 4*secretnumber
    else if( getGuessValue > 4*secretNumber || getGuessValue < 0.25*secretNumber){
        if(score > 0){
       // document.querySelector('.message').textContent = getGuessValue > secretNumber ? '😟 Too Much High!' : '😟 Too Much Low!'
       displayMessage(getGuessValue > secretNumber ? '😟 Too Much High!' : '😟 Too Much Low!')
        score=score-3;
        if(score <= 0){
            score =0;
           // document.querySelector('.message').textContent = '😭 You lost the game!!!'
           displayMessage('😭 You lost the game!!!')
        }
        document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = '😭 You lost the game!!!'
            displayMessage('😭 You lost the game!!!')
        }
    } 

}) 


document.querySelector('.again').addEventListener('click', ()=>{
    score =20;
    secretNumber = Math.trunc((Math.random()*100))+1
   // document.querySelector('.message').textContent = 'Start guessing ...'
    displayMessage('Start guessing ...')
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = ''
    //changing body background color
        document.querySelector('body').style.backgroundColor = '#222'
        //changing number value width
        document.querySelector('.number').style.width = '15rem'

})

