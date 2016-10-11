var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button')

//create Guess button
guessButton.addEventListener('click', function() {

//assign value for the currentGuess
  var curretValue = (document.querySelector('#current-guess').value;
  var currentGuess = parseInt(currentValue, 10);

  //create random number
  function setRandomNumber() {
    return Math.floor((Math.random() * 100) + 1);
  }

  //set random number to variable...
  var secretNumber = setRandomNumber();

  console.log(currentGuess);

//action to confirm currentGuess is between 1 and 100
if (isNaN(currentGuess) === true) {
  alert("Please enter a number between 1 and 100.");
}

//action to compare currentGuess to SecretNumber
else if (currentGuess > secretNumber) {
    document.querySelector('.lastGuess').innerText = '#currentGuess';
    document.querySelector('.hintText').innerText = 'That is too high!';
  }

else if (currentGuess < secretNumber) {
    document.querySelector('.lastGuess').innerText = '#currentGuess';
    document.querySelector('.hintText').innerText = 'That is too low!';
  }

else if (currentGuess === secretNumber) {
  document.querySelector('.lastGuess').innerText = '#currentGuess';
  document.querySelector('.hintText').innerText = 'YOU GOT IT!';
}
});
