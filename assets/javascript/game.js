var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;
var guessesSoFar = [];


document.onkeypress = function (event) {
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    guessesSoFar.push(userGuess);
    
    
if ((userGuess === computerGuess) && (guessesLeft > 0)) {
    winCounter++;
    guessesLeft = 9;
	computerGuess.length = 0;
	var compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];

}

    else if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }

        else {
            lossCounter++;
            guessesLeft = 10;
            guessesSoFar = [];
	        var compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];

        }

        var html = "<p>Wins: " + winCounter + "</p>" +
          "<p>Losses: " + lossCounter + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + guessesSoFar + "</p>"
       
            document.querySelector("#game").innerHTML = html;
}
