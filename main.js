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
  // console.log(result)

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}
const sortResult = sortByNumber()

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
  if(getRandomNumber(6) === 1){
    document.getElementById('#d6-roll').src = "images/d6/1.png"; 
  } else if (getRandomNumber(6) === 2){
    document.getElementById('#d6-roll').src = "images/d6/2.png";
  } else if (getRandomNumber(6) === 3){
    document.getElementById('#d6-roll').src = "images/d6/3.png";
  } else if (getRandomNumber(6) === 4){
    document.getElementById('#d6-roll').src = "images/d6/4.png";
  } else if (getRandomNumber(6) === 5){
    document.getElementById('#d6-roll').src= "images/d6/5.png";
  } else {
    document.getElementById('#d6-roll').src = "images/d6/6.png";
}
}
roll6sImage.addEventListener('click', roll6s)
//code to add result of the roll into respective array
sixes.push(getRandomNumber(6));


//double 6s
const rollDouble6sImage = document.querySelector('.d6 roll')
console.log(rollDouble6sImage)//?
const rollDouble6s = function(){
  if(getRandomNumber(6) === 1){
    document.getElementById('.d6 roll').src = "images/d6/1.png"; 
  } else if (getRandomNumber(6) === 2){
    document.getElementById('.d6 roll').src = "images/d6/2.png";
  } else if (getRandomNumber(6) === 3){
    document.getElementById('.d6 roll').src = "images/d6/3.png";
  } else if (getRandomNumber(6) === 4){
    document.getElementById('.d6 roll').src = "images/d6/4.png";
  } else if (getRandomNumber(6) === 5){
    document.getElementById('.d6 roll').src = "images/d6/5.png";
  } else {
    document.getElementById('.d6 roll').src = "images/d6/6.png";
}  
}

rollDouble6sImage.addEventListener('click', rollDouble6s)
//code to add result of the roll into respective array
doubleSixes.push(getRandomNumber(6))

//12s
const roll12sImage = document.querySelector('#d12-roll')

const roll12s = function(){
  if(getRandomNumber(12) === 1){
    document.getElementById('#d12-roll').src = "images/numbers/1.png"; 
  } else if (getRandomNumber(12) === 2){
    document.getElementById('#d12-roll').src = "images/numbers/2.png"; 
  } else if (getRandomNumber(12) === 3){
    document.getElementById('#d12-roll').src = "images/numbers/3.png"; 
  } else if (getRandomNumber(12) === 4){
    document.getElementById('#d12-roll').src = "images/numbers/4.png"; 
  } else if (getRandomNumber(12) === 5){
    document.getElementById('#d12-roll').src = "images/numbers/5.png"; 
  } else if (getRandomNumber(12) === 6){
    document.getElementById('#d12-roll').src = "images/numbers/6.png";
  } else if (getRandomNumber(12) === 7){
    document.getElementById('#d12-roll').src = "images/numbers/7.png";
  } else if (getRandomNumber(12) === 8){
    document.getElementById('#d12-roll').src = "images/numbers/8.png";
  } else if (getRandomNumber(12) === 9){
    document.getElementById('#d12-roll').src = "images/numbers/9.png";
  } else if (getRandomNumber(12) === 10){
    document.getElementById('#d12-roll').src = "images/numbers/10.png";
  } else if (getRandomNumber(12) === 11){
    document.getElementById('#d12-roll').src = "images/numbers/11.png";
  } else {
    document.getElementById('#d12-roll').src = "images/numbers/12.png";
}  
}

roll12sImage.addEventListener('click', roll12s)
//code to add result of the roll into respective array
twelves.push(getRandomNumber(12))

//20s
const roll20sImage = document.querySelector('#d20-roll')

const roll20s = function(){
  if(getRandomNumber(20) === 1){
    document.getElementById('#d20-roll').src = "images/numbers/1.png"; 
  } else if (getRandomNumber(20) === 2){
    document.getElementById('#d20-roll').src = "images/numbers/2.png"; 
  } else if (getRandomNumber(20) === 3){
    document.getElementById('#d20-roll').src = "images/numbers/3.png";
  } else if (getRandomNumber(20) === 4){
    document.getElementById('#d20-roll').src = "images/numbers/4.png";
  } else if (getRandomNumber(20) === 5){
    document.getElementById('#d20-roll').src = "images/numbers/5.png";
  } else if (getRandomNumber(20) === 6){
    document.getElementById('#d20-roll').src = "images/numbers/6.png";
  } else if (getRandomNumber(20) === 7){
    document.getElementById('#d20-roll').src = "images/numbers/7.png";
  } else if (getRandomNumber(20) === 8){
    document.getElementById('#d20-roll').src = "images/numbers/8.png";
  } else if (getRandomNumber(20) === 9){
    document.getElementById('#d20-roll').src = "images/numbers/9.png";
  } else if (getRandomNumber(20) === 10){
    document.getElementById('#d20-roll').src = "images/numbers/10.png";
  } else if (getRandomNumber(20) === 11){
    document.getElementById('#d20-roll').src = "images/numbers/11.png";
  } else if (getRandomNumber(20) === 12){
    document.getElementById('#d20-roll').src = "images/numbers/12.png";
  } else if (getRandomNumber(20) === 13){
    document.getElementById('#d20-roll').src = "images/numbers/13.png";
  } else if (getRandomNumber(20) === 14){
    document.getElementById('#d20-roll').src = "images/numbers/14.png";
  } else if (getRandomNumber(20) === 15){
    document.getElementById('#d20-roll').src = "images/numbers/15.png";
  } else if (getRandomNumber(20) === 16){
    document.getElementById('#d20-roll').src = "images/numbers/16.png";
  } else if (getRandomNumber(20) === 17){
    document.getElementById('#d20-roll').src = "images/numbers/17.png";
  } else if (getRandomNumber(20) === 18){
    document.getElementById('#d20-roll').src = "images/numbers/18.png";
  } else if (getRandomNumber(20) === 19){
    document.getElementById('#d20-roll').src = "images/numbers/19.png";
  } else {
    document.getElementById('#d20-roll').src = "images/numbers/20.png";
}
}
roll20sImage.addEventListener('click', roll20s)
//code to add result of the roll into respective array
twenties.push(getRandomNumber(20))


/******************
 * RESET FUNCTION *
 ******************/

//Function for the reset button for the data and interface

const resetButton = document.querySelector('#reset-button')

const resetAllDice = function(){
 
  //statement to change dice buttons back to starting image
resetButton.getElementById("#d6-roll").src = "images/start/d6.png"



//statement to change dice buttons back to starting image
resetButton.getElementById("#double-d6-roll-1").src = "images/start/d6.png"
resetButton.getElementById("#double-d6-roll-2").src = "images/start/d6.png"


//statement to change dice buttons back to starting image
resetButton.getElementById("#d12-roll").src = "images/start/d12.jpeg"


//statement to change dice buttons back to starting image
resetButton.getElementById("#d20-roll").src = "images/start/d20.jpg"


//required statement to change mean text area to nothing(no value) string
resetButton.getElementById("#d6-rolls-mean").innerText = "null"
resetButton.getElementById("#double-d6-rolls-mean").innerText = "null"
resetButton.getElementById("#d12-rolls-mean").innerText = "null"
resetButton.getElementById("#d20-rolls-mean").innerText = "null"

//required statement to change median text area to nothing(no value) string
resetButton.getElementById("#d6-rolls-median").innerText = "null"
resetButton.getElementById("#double-d6-rolls-median").innerText = "null"
resetButton.getElementById("#d12-rolls-median").innerText = "null"
resetButton.getElementById("#d20-rolls-median").innerText = "null"

//required statement to change mode text area to nothing(no value) string
resetButton.getElementById("#d6-rolls-mode").innerText = "null"
resetButton.getElementById("#double-d6-rolls-mode").innerText = "null"
resetButton.getElementById("#d12-rolls-mode").innerText = "null"
resetButton.getElementById("#d20-rolls-mode").innerText = "null"
}

resetButton.addEventListener('click', resetAllDice);

/****************
 * MATH SECTION *
 ****************/

//Mean
const findMean = function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++)
  sum = sum + arr[i];

  return sum /arr.length; 
}

const average6s = function(sixes){
  return sixes.map(findMean)
 
}

const average12s = function(twelves){
  return twelves.map(findMean)
 
}

const average20s = function(twenties){
  return twenties.map(findMean)
 
}



//Median
const median = function(sortResult){
  if(sortResult.length ===0) return 0;

  sortResult.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(sortResult.length / 2);

  if (sortResult.length % 2)
    return sortResult[half];

  return (sortResult[half - 1] + sortResult[half]) / 2.0;
}
