/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/

//**Function to query User Interface elements. Leave functions blank
//**Each Dice Image should have click event listeners

//6s
const roll6sImage = document.querySelector('#d6-roll')

const roll6s = function(){
  roll6sImage.style.opacity = "0.5"; 
}

roll6sImage.addEventListener('click', roll6s)

//double 6s
const rollDouble6sImage = document.querySelector('.d6 roll')

const rollDouble6s = function(){
  rollDouble6sImage.style.opacity = "0.5";  
}

rollDouble6sImage.addEventListener('click', rollDouble6s)


//12s
const roll12sImage = document.querySelector('#d12-roll')

const roll12s = function(){
  roll12sImage.style.opacity = "0.5"; 
}

roll12sImage.addEventListener('click', roll12s)

//20s
const roll20sImage = document.querySelector('#d20-roll')

const roll20s = function(){
  roll20sImage.style.opacity = "0.5"; 
}

roll20sImage.addEventListener('click', roll20s)

/******************
 * RESET FUNCTION *
 ******************/

//Function for the reset button for the data and interface

const resetButton = document.querySelector()

const resetAllDice = function(){
  //required for loop for 6s
  //statement to change dice buttons back to starting image
document.getElementById("#d6-roll").src = "./start/d6.png"


//required for loop for double 6s
//statement to change dice buttons back to starting image
document.getElementById("#double-d6-roll-1").src = "./start/d6.png"
document.getElementById("#double-d6-roll-2").src = "./start/d6.png"

//required for loop for 12s
//statement to change dice buttons back to starting image
document.getElementById("#d12-roll").src = "./start/d12.jpeg"

//required for loop for 20s
//statement to change dice buttons back to starting image
document.getElementById("#d20-roll").src = "./start/d20.jpg"


//required statement to change mean text area to nothing(no value) string
document.getElementById("#d6-rolls-mean").innerText = "null"
document.getElementById("#double-d6-rolls-mean").innerText = "null"
document.getElementById("#d12-rolls-mean").innerText = "null"
document.getElementById("#d20-rolls-mean").innerText = "null"

//required statement to change median text area to nothing(no value) string
document.getElementById("#d6-rolls-median").innerText = "null"
document.getElementById("#double-d6-rolls-median").innerText = "null"
document.getElementById("#d12-rolls-median").innerText = "null"
document.getElementById("#d20-rolls-median").innerText = "null"

//required statement to change mode text area to nothing(no value) string
document.getElementById("#d6-rolls-mode").innerText = "null"
document.getElementById("#double-d6-rolls-mode").innerText = "null"
document.getElementById("#d12-rolls-mode").innerText = "null"
document.getElementById("#d20-rolls-mode").innerText = "null"
}

resetButton.addEventListener('click', resetAllDice);

/****************
 * MATH SECTION *
 ****************/
