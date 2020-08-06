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

//double 6s

//12s

//20s

/******************
 * RESET FUNCTION *
 ******************/

//Function for the reset button for the data and interface

const resetButton = document.querySelector()

const resetAllDice = function(){
  //required for loop for 6s
  //statement to change dice buttons back to starting image
document.getElementById("#d6-roll").src = "./d6.png"
}

//required for loop for double 6s
//statement to change dice buttons back to starting image
document.getElementById("#double-d6-roll-1").src = "./d6.png"
document.getElementById("#double-d6-roll-2").src = "./d6.png"

//required for loop for 12s
//statement to change dice buttons back to starting image
document.getElementById("#d12-roll").src = "./d12.jpeg"

//required for loop for 20s
//statement to change dice buttons back to starting image
document.getElementById("#d20-roll").src = "./d20.jpg"


//required statement to change mean text area to nothing(no value) string

//required statement to change median text area to nothing(no value) string

//required statement to change mode text area to nothing(no value) string



resetButton.addEventListener('click', resetAllDice);

/****************
 * MATH SECTION *
 ****************/
