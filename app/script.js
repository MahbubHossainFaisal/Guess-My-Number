'use strict';

//To get a number between 1 to 100
//Math.random()*20 will generate float values from 0-99
//Math.trunc() will convert them to int
//+1 is done because to get value between 1-100

const secretNumber = Math.trunc((Math.random()*100))+1
document.querySelector('.number').textContent = secretNumber;

//Score value
let score = 20;



document.querySelector('.check').addEventListener('click', ()=> {
    let getGuessValue = document.querySelector('.guess').value; // this will give a string value.
    // If we want a number from it we have to use number function to convert the string into number
    getGuessValue=Number(getGuessValue)
    console.log(getGuessValue);

    if(!getGuessValue){
        document.querySelector('.message').textContent = '🥺 No Number!!!!'
    } else if(getGuessValue === secretNumber){
        document.querySelector('.message').textContent = '🥰 Correct!!!!' 
    } else if(getGuessValue > secretNumber && getGuessValue < secretNumber+5 || getGuessValue < secretNumber && getGuessValue > secretNumber-5){
        if(score> 0){
        document.querySelector('.message').textContent = '😘 Allmost there'
        score--;
        if(score <= 0){
            score =0;
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
    }
    else if(getGuessValue > secretNumber && getGuessValue < secretNumber+10 || getGuessValue < secretNumber && getGuessValue > secretNumber-10){
       if(score > 0){
        document.querySelector('.message').textContent = '🤑 Just A Little Bit More or Less!'
        score--;
        if(score <= 0){
            score =0;
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        document.querySelector('.score').textContent = score;
       } else{
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
    }
    else if(getGuessValue > secretNumber && getGuessValue <= 2*secretNumber){
        if(score > 0 ){
        document.querySelector('.message').textContent = '😛 A Bit High!' 
        score--;
        if(score <= 0){
            score =0;
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
    } else if(getGuessValue > 2*secretNumber && getGuessValue <= 4*secretNumber){
        if(score> 0){
        document.querySelector('.message').textContent = '🤨 Much High!'
        score=score-2;
        if(score <= 0){
            score =0;
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        document.querySelector('.score').textContent = score;
        } else {
             document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        
    } else if( getGuessValue > 4*secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent = '😟 Too Much High!'
        score=score-3;
        if(score <= 0){
            score =0;
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
    } else if(getGuessValue < secretNumber && getGuessValue>= 0.5*secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent = '😛 A Bit Low!' 
        score--;
        if(score <= 0){
            score =0;
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
    } else if(getGuessValue < 0.5*secretNumber && getGuessValue >= 0.25*secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent = '🤨 Much Low!' 
        score=score-2;
        if(score <= 0){
            score =0;
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
    }else if(getGuessValue < 0.25*secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent = '😟 Too Much Low!'
        score=score-3;
        if(score <= 0){
            score =0;
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
        document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = '😭 You lost the game!!!'
        }
    }
}) 

