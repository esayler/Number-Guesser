var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');

//create secretNumber
function setSecretNumber() {
  return(Math.floor((Math.random() * 100) + 1));
}

var secretNumber = setSecretNumber();
console.log(secretNumber);

//create currentGuess
function createInput() {
  var currentValue = document.querySelector('#current-guess').value;
  return (parseInt(currentValue, 10));
}

//test currentGuess
function testCurrentGuess(currentGuess) {
  if (currentGuess >100 || currentGuess < 1 || isNaN(currentGuess) === true) {
    alert("Please enter a number between 1 and 100.");
  }
    else if (currentGuess > secretNumber) {
      return("That is too high!");
    }
      else if (currentGuess < secretNumber) {
        return("That is too low!");
      }
        else if(currentGuess === secretNumber) {
          return("YOU GOT IT!");
        }
}

function updateText(newGuessValue, hintText) {
  if (isNaN(currentGuess) === false) {
    document.querySelector('.last-guess').innerText = newGuessValue;
    document.querySelector('.hint').innerText = hintText;
  }
}

function clearCurrentGuess() {
  document.getElementById("current-guess").value = '';
}

function resetPage() {
  return document.getElementById('guess-form').reset;
}

//Guess button
guessButton.addEventListener('click', function() {

  var currentGuess = createInput();
  updateText (currentGuess, testCurrentGuess(currentGuess));

});

clearButton.addEventListener('click', function() {
    clearCurrentGuess();
  });

resetButton.addEventListener('click', function() {
    resetPage();
  });
