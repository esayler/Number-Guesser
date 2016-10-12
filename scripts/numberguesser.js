var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');

resetButton.disabled = true;
clearButton.disabled = true;


//min and max variables and setter function
function setMinMax (minValue, maxValue) {
  document.getElementById('min-range').value = minValue;
  document.getElementById('max-range').value = maxValue;
}

setMinMax (1, 100);

var min = document.querySelector('#min-range').value;
var max = document.querySelector('#max-range').value;

//create secretNumber
function setSecretNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var secretNumber = setSecretNumber(min, max);

console.log(secretNumber);

//create currentGuess
function createInput() {
  var currentValue = document.querySelector('#current-guess').value;
  return (parseInt(currentValue, 10));
}

//test currentGuess
function testCurrentGuess(currentGuess) {
  setSecretNumber(min, max);

  if (currentGuess > max || currentGuess < min) {
    return "Please enter a number between 1 and 100.";
  }
    else if (isNaN(currentGuess) === true) {
      return "You must enter a NUMBER between 1 and 100.";
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
  if (isNaN(newGuessValue) === false) {
    document.querySelector('.last-guess').innerText = newGuessValue;
    document.querySelector('.hint').innerText = hintText;
  }
    else if(newGuessValue === 'none') {
      document.querySelector('.last-guess').innerText = "N/A";
      document.querySelector('.hint').innerText = "Waiting for your guess...";
    }
}

function clearCurrentGuess() {
  document.getElementById("current-guess").value = '';
  clearButton.disabled = true;
}

function resetPage() {
  clearCurrentGuess();
  updateText('none', null);
  setMinMax (1, 100);
  secretNumber = setSecretNumber();
  clearButton.disabled = true;
  resetButton.disabled = true;
  console.log(secretNumber);
}

//Guess button
guessButton.addEventListener('click', function() {

  var currentGuess = createInput();
  updateText (currentGuess, testCurrentGuess(currentGuess));
  resetButton.disabled = false;
  clearButton.disabled = false;
});

clearButton.addEventListener('click', function() {
    clearCurrentGuess();
  });

resetButton.addEventListener('click', function() {
    resetPage();
  });
