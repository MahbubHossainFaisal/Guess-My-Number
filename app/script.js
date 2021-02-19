'use strict';

//Event listener
document.querySelector('.check').addEventListener('click', ()=> {
    let getGuessValue = document.querySelector('.guess').value; // this will give a string value.
    // If we want a number from it we have to use number function to convert the string into number
    getGuessValue=Number(getGuessValue)
    console.log(getGuessValue);

    if(!getGuessValue){
        document.querySelector('.message').textContent = '🥺 No Number!'
    }
}) 

