var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var minMaxButton = document.querySelector('.minmax-button');

resetButton.disabled = true;
clearButton.disabled = true;

var secretNumber = setSecretNumber(1, 100);
console.log("Secret number is: " + secretNumber);

//min and max variables and setter function
function setMinMax (minValue, maxValue) {
  document.getElementById('min-range').value = minValue;
  document.getElementById('max-range').value = maxValue;
}

function currentMin() {
  return parseInt(document.getElementById('min-range').value);
}

function currentMax() {
  return parseInt(document.getElementById('max-range').value);
}

//create secretNumber function
function setSecretNumber() {
  min = currentMin();
  max = currentMax();
  console.log("Min: " + currentMin() + " Max: " + currentMax());
  return Math.floor(Math.random()*(max-min+1)+min);
}

//create currentGuess
function createInput() {
  var currentValue = document.querySelector('#current-guess').value;
  return (parseInt(currentValue, 10));
}

//test currentGuess
function testCurrentGuess(currentGuess) {

  if (currentGuess > currentMax() || currentGuess < currentMin()) {
    return "Please enter a number between " + min + " and " + max;
  }
    else if (isNaN(currentGuess) === true) {
      return "Please enter a number between " + min + " and " + max;
    }
      else if (currentGuess > secretNumber) {
        return("That is too high!");
      }
        else if (currentGuess < secretNumber) {
          return("That is too low!");
        }
          else if(currentGuess === secretNumber) {
            return("YOU GOT IT! Try again with a longer range!");
          }
}

function updateText(newGuessValue, hintText) {
  if (newGuessValue === secretNumber && isNaN(newGuessValue) ===false) {
    document.querySelector('.last-guess').innerText = newGuessValue;
    document.querySelector('.hint').innerText = hintText;
    var updatedMin = currentMin()-10;
    var updatedMax = currentMax()+10;
    setMinMax(updatedMin, updatedMax);
    secretNumber = setSecretNumber();
    console.log("New secret number: " + secretNumber);
  }
    if (isNaN(newGuessValue) === false) {
      document.querySelector('.last-guess').innerText = newGuessValue;
      document.querySelector('.hint').innerText = hintText;
    }
      else if(newGuessValue === 'none') {
        document.querySelector('.last-guess').innerText = "";
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
  secretNumber = setSecretNumber(min, max);
  clearButton.disabled = true;
  resetButton.disabled = true;
  console.log("New secret number: " + secretNumber);
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
  console.log("Current Min: " + currentMin() + " and Current Max: " + currentMax());
  secretNumber = setSecretNumber();
  console.log("New secret number is: " + secretNumber);
});
