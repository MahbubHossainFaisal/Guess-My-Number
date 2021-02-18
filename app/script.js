'use strict';

let message = document.querySelector('.message').textContent; // this will print the value of the class message in the index.html

console.log(message) 

document.querySelector('.number').textContent = 10
document.querySelector('.score').textContent = 100

//setting default input value of guess class
document.querySelector('.guess').value = 3;
console.log(document.querySelector('.guess').value)