var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');

//set random number to variable...
var secretNumber = setRandomNumber();

//create random number
function setRandomNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

//create Guess button
guessButton.addEventListener('click', function() {

console.log(secretNumber);
  //assign value for the currentGuess
  var currentValue = document.querySelector('#current-guess').value;
  var currentGuess = parseInt(currentValue, 10);
  
  //if statments to confirm currentGuess is between 1 and 100
  if (isNaN(currentGuess) === true) {
    alert("Please enter a number between 1 and 100.");
  }

    //action to compare currentGuess to SecretNumber
    else if (currentGuess > secretNumber) {
      document.querySelector('.last-guess').innerText = currentGuess;
      document.querySelector('.hint').innerText = 'That is too high!';
    }

      else if (currentGuess < secretNumber) {
        document.querySelector('.last-guess').innerText = currentGuess;
        document.querySelector('.hint').innerText = 'That is too low!';
      }

        else if (currentGuess === secretNumber) {
          document.querySelector('.last-guess').innerText = currentGuess;
          document.querySelector('.hint').innerText = 'YOU GOT IT!';
        }
  });

  function checkGuess() {

  }

clearButton.addEventListener('click', function() {
    // code for clear actions
  });

resetButton.addEventListener('click', function() {
    // code for reset actions
  });
