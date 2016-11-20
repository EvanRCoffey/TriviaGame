var numCorrect = 0;
var numIncorrect = 0;
var numTimeOut = 0;
var currentQuestion = {};
var timer = 30;
var counterInterval;
var counterTimeout;

var Question1 = {
	question : "Who was the radio celebrity that provided comic relief throughout 'The Fifth Element'?",
	answer1 : "Jay Queue",
	answer2 : "Ruby Rhod",
	answer3 : "Dirk Diggler",
	answer4 : "Chet Brockwell",
	correctAnswer : 2,
	gif : "assets/images/rubyRhod.gif"
}

var Question2 = {
	question : 'What was the name of the artificially intelligent computer featured in "2001: A Space Odyssey"?',
	answer1 : "Quantum Express",
	answer2 : "Watson",
	answer3 : "HAL 9000",
	answer4 : "THX 1138",
	correctAnswer : 3,
	gif : "assets/images/2001.gif"
}

var Question3 = {
	question : 'What city was the setting for "Blade Runner"?',
	answer1 : "Tokyo",
	answer2 : "Amsterdam",
	answer3 : "Los Angeles",
	answer4 : "Nashville",
	correctAnswer : 3,
	gif : "assets/images/bladeRunner.gif"
}

var Question4 = {
	question : 'Who directed "Alien"?',
	answer1 : "Stanley Kubrick",
	answer2 : "Christopher Nolan",
	answer3 : "The Wachowski Siblings",
	answer4 : "Ridley Scott",
	correctAnswer : 4,
	gif : "assets/images/alien.gif"
}

var Question5 = {
	question : 'What was the tattoo that got Keanu Reeves out of his apartment in the opening scene of "The Matrix"?',
	answer1 : "A white rabbit",
	answer2 : "A butterfly",
	answer3 : "A serpent coiled around a sword",
	answer4 : "A fire-breathing dragon",
	correctAnswer : 1,
	gif : "assets/images/matrix.gif"
}

var Question6 = {
	question : 'What is "Wall-E"s favorite movie?',
	answer1 : "2001: A Space Odyssey",
	answer2 : "Hello, Dolly!",
	answer3 : "Snow White and the Seven Dwarves",
	answer4 : "West Side Story",
	correctAnswer : 2,
	gif : "assets/images/walle.gif"
}

var Question7 = {
	question : 'What caused the accident that stranded Sandra Bullock in "Gravity"?',
	answer1 : "A meteor shower",
	answer2 : "An explosion in her ship",
	answer3 : "Debris from a destroyed satellite",
	answer4 : "Her harness breaking",
	correctAnswer : 3,
	gif : "assets/images/gravity.gif"
}

var Question8 = {
	question : 'What was Matthew Mcconaugheys occupation before he agreed to help save the world in "Interstellar"?',
	answer1 : "Farmer",
	answer2 : "Pilot",
	answer3 : "Web developer",
	answer4 : "Preschool teacher",
	correctAnswer : 2,
	gif : "assets/images/interstellar.gif"
}

var questions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8]

function playFromBeginning () {
	nextQuestion()
}

function nextQuestion() {
	if ((numCorrect + numIncorrect + numTimeOut) === 8) {
		//End-game status report
		$("#messageArea").html("Total correct: " + numCorrect + "<br>");
		$("#messageArea").append("Total incorrect: " + numIncorrect + "<br>");
		$("#messageArea").append("Total time outs: " + numTimeOut + "<br>");
		$("#messageArea").append("Thanks for playing!");
	}
	else {
		//Set timer to 30 seconds
		timer = 30;
		//Load the question object into current question
		currentQuestion = questions[(numCorrect+numIncorrect+numTimeOut)];
		//Display time remaining in time remaining area
		$("#timeRemaining").html("Time remaining: " + timer + " seconds.");
		//Display next question in message area
		$("#messageArea").html(currentQuestion.question);
		//Display that question's answers in answers area
		$("#answersArea").html('<button onclick="isCorrect(1)" type="button" class="btn btn-default"> id="1"' + currentQuestion.answer1 + '</button>');
		$("#answersArea").append('<button onclick="isCorrect(2)" type="button" class="btn btn-default"> id="2"' + currentQuestion.answer2 + '</button>');
		$("#answersArea").append('<button onclick="isCorrect(3)" type="button" class="btn btn-default"> id="3"' + currentQuestion.answer3 + '</button>');
		$("#answersArea").append('<button onclick="isCorrect(4)" type="button" class="btn btn-default"> id="4"' + currentQuestion.answer4 + '</button>');
		//Give user 30 seconds to answer question
		counterInterval = setInterval(decrementTimer, 1000)
		counterTimeout = setTimeout(timesUp, 30000);
	}
	
}

function decrementTimer() {
	timer--;
	$("#timeRemaining").html("Time remaining: " + timer + " seconds.");
}

function isCorrect(number) {
	//If the answer is correct....
	if (number === currentQuestion.correctAnswer) {
		//Display winning message in message area
		$("#messageArea").html("Correct!");
		//Increment correct answers
		numCorrect++;
	}
	//If the answer is incorrect...
	else {
		//Display losing message in message area
		$("#messageArea").html("Incorrect!");
		//Increment incorrect answers
		numIncorrect++;
	}
	//Clear interval
	clearInterval(counterInterval);
	//Clear timer
	clearTimeout(counterTimeout)
	//Display gif in answers area with a caption (and do anything else that's fun)
	$("#answersArea").html('<img src= "'+ currentQuestion.gif + '">')
	//Wait 5 seconds, then move on to the next question
	setTimeout(nextQuestion, 5000);
}

function timesUp() {
	//Display time out message in message area
	$("#messageArea").html("Time's up!");
	//Increment time outs
	numTimeOut++;
	//Clear interval
	clearInterval(counterInterval);
	//Clear timer
	clearTimeout(counterTimeout)
	//Display gif in answers area with a caption (and do anything else that's fun)
	$("#answersArea").html('<img src= "'+ currentQuestion.gif + '">')
	//Wait 5 seconds, then move on to the next question
	setTimeout(nextQuestion, 5000);
}

//Run the trivia game!
playFromBeginning();