// var startButton = document.getElementById("start-button");

// 		startButton.addEventListener("click", startGame)

		// document.onkeyup = function(start) {
		// 	var pushed = start.key;
		// 	if (pushed === 'Enter') {
		// 		alert("Ok let's begin. Good Luck!");
		// 	}

var wordlist = ['dog', 'cat',' fish', 'turtle']

var randomize = Math.floor(Math.random() * wordlist.length);

var randomWordChoice = wordlist[randomize];

var randWordLetters = randomWordChoice.split("");

var yourGuesses = [];

var maxGuesses = 6;


$(document).ready(function() {
	// playAgain();

	showGuesses();
	showWord();
	$('#guess').attr('onkeyup', 'update();');
});

function playAgain() {
	$('play-again-button').on('click', 'resetGame();');
	$(randomWordChoice).text(Math.floor(Math.random() * wordlist.length));
	randWordLetters = randomWordChoice.split("");
}

function hideWord() {
	for(i = 0; i < letters.length; i++){
      // Inside the loop...

      // 2. Create a variable named "letterBtn" equal to $("<button>");
      var letterSpace = $("<p>_</p>");
      // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
      letterBtn.addClass("letter-button letter letter-button-color");
      // 4. Then give each "letterBtn" a data-attribute called "data-letter", with a value eqaual to "letters[i]"
      letterBtn.attr("data-letter", letters[i]);
      // 5. Then give each "letterBtn" a text equal to "letters[i]".
      letterBtn.text(letters[i]);
      // letterBtn.attr("onclick", onClick());
      // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
      $('#buttons').append(letterBtn);
      }
}

function showWord() {
	while (randomWordChoice == ''){
		playAgain();
	}
	$('#random-word').html(hideWord());
}

function showGuesses() {
	yourGuesses.sort();
	$('#letters-guessed').html(yourGuesses.join(', '));
}

function dupGuess () {
	var uniqueGuesses = [];
	$.each(yourGuesses, function(index, element) {
		if (element.length > 0 && $.inArray(element, uniqueGuesses) == -1) {
			yourGuesses.push(element);
		}
	});
	yourGuesses = uniqueGuesses;
}

function addGuess() {
	if (/^[a-zA-Z]*$/.test($('#guess').val()) && typeof $('#guess').val() !== "undefined"){
		yourGuesses.push($('#guess').val().toLowerCase());
	}
	$('#guess').val('');
}

function endGame(win) {
	if (win) {
		$('#end-game-win').html('You Win!');
		$('#end-game-message').html('To play again click the button.');
	}
	else {
		$('#end-game-lost').html('You Lost. :(');
		$('#end-game-message').html('Sorry, you are out of guesses. The word was "' + randomWordChoice + '." Please play again');
		alert;
	}
}



function checkGuesses() {
	var guessesRemanining = maxGuesses;
	var	string = randomWordChoice.toLowerCase();

	
	for (var i = 0; i <yourGuesses.length; i++) {
		if (yourGuesses[i] === -1) {
			guessesRemanining--;
		}
	}

	if (guesseRemanining <= 0) {
		endGame(false);
		return;
	}


}

function resetGame() {
	randomWordChoice = '';
	yourGuesses = [];
}

function update() {
	addGuess();
	dupGuess();
	showWord();
	showGuesses();
	checkGuesses();
}


		
