//declare number of wins
var winCount = 0;
console.log(winCount);

var timesNeededToWin = 0;

var generateRounds = function () {
  var rounds = Math.floor(Math.random() * 3) + 2;
  return rounds;
};

var differenceToWin = function () {
  if (
    timesNeededToWin - winCount == 4 ||
    timesNeededToWin - winCount == 3 ||
    timesNeededToWin - winCount == 2 ||
    timesNeededToWin - winCount == 1
  ) {
    return `You need ${timesNeededToWin - winCount} to win.`;
  } else {
    return `You have won!`;
  }
};

var main = function (input) {
  //generate random number and assign it to the secret word
  var randomNumber = generateRandomNumber();
  console.log(`randomNumber`);
  console.log(randomNumber);

  //assign 1 to banana, 2 to chisel, 3 to faucet
  var generateSecretWord = function () {
    if (randomNumber == 1) return `banana`;
    if (randomNumber == 2) return `chisel`;
    if (randomNumber == 3) return `faucet`;
  };

  var secretWord = generateSecretWord();
  console.log(secretWord);

  if (timesNeededToWin == 0) {
    timesNeededToWin = generateRounds();
  }
  console.log("timesNeededToWin");
  console.log(timesNeededToWin);

  //if player guesses correctly, add to win count
  if (input == secretWord) {
    winCount += 1;
    var winStatus = differenceToWin();
    return `You guessed ${input}, the secret word is ${secretWord}. ${winStatus}`;
  }
  winCount = 0;
  var winStatus = differenceToWin();
  return `You guessed ${input}, the secret word is ${secretWord}. ${winStatus}`;
};

//generate random number
var generateRandomNumber = function () {
  return (randomNumber = Math.ceil(Math.random() * 3));
};
