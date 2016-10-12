var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var minMaxButton = document.querySelector('.min-max-button');

resetButton.disabled = true;
clearButton.disabled = true;



// initialize min/max to 1-100 on page load

//var min = document.querySelector('#min-range').value;
//var max = document.querySelector('#max-range').value;
displayMinMax (1, 100);
setMinMax(1, 100);
var secretNumber = setSecretNumber(min, max);


//min and max variables and setter function
function displayMinMax (minValue, maxValue) {
  document.getElementById('min-range').value = minValue;
  document.getElementById('max-range').value = maxValue;
}

function setMinMax() {
  min = document.getElementById('min-range').value;
  max = document.getElementById('max-range').value;
  console.log("min: " + min + " max: " + max);
}

//create secretNumber
function setSecretNumber(min,max) {
  var val = Math.floor(Math.random()*(max-min+1)+min);
  console.log("new secret number: " + val);
  return val;

}


//create currentGuess
function createInput() {
  var currentValue = document.querySelector('#current-guess').value;
  return (parseInt(currentValue, 10));
}

//test currentGuess
//TODO: add validation for new min/max values
function testCurrentGuess(currentGuess) {

  if (currentGuess > max || currentGuess < min) {
    return "Please enter a number between " + min + " and " + max;
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
  setMinMax(1, 100);
  displayMinMax (1, 100);
  secretNumber = setSecretNumber();
  clearButton.disabled = true;
  resetButton.disabled = true;
  console.log("reset secret number: " + secretNumber);
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

minMaxButton.addEventListener('click', function() {
  setMinMax();
  setSecretNumber(min, max);
})
