var numCorrect = 0;
var numIncorrect = 0;
var numTimeOut = 0;
var currentQuestion = {};

var Question1 = {
	question = 'Who was the radio celebrity that provided comic relief throughout "The Fifth Element"?',
	answer1 = "Jay Queue",
	answer2 = "Ruby Rhod",
	answer3 = "Dirk Diggler",
	answer4 = "Chet Brockwell",
	correctAnswer = 2;
}

var Question2 = {
	question = 'What was the name of the artificially intelligent computer featured in "2001: A Space Odyssey"?',
	answer1 = "Quantum Express",
	answer2 = "Watson",
	answer3 = "HAL 9000",
	answer4 = "THX 1138",
	correctAnswer = 3;
}

var Question3 = {
	question = 'What city was the setting for "Blade Runner"?',
	answer1 = "Tokyo",
	answer2 = "Amsterdam",
	answer3 = "Los Angeles",
	answer4 = "Nashville",
	correctAnswer = 3;
}

var Question4 = {
	question = 'Who directed "Alien"?',
	answer1 = "Stanley Kubrick",
	answer2 = "Christopher Nolan",
	answer3 = "The Wachowski Siblings",
	answer4 = "Ridley Scott",
	correctAnswer = 4;
}

var Question5 = {
	question = 'What was the tattoo that got Keanu Reeves out of his apartment in the opening scene of "The Matrix"?',
	answer1 = "A white rabbit",
	answer2 = "A butterfly",
	answer3 = "A serpent coiled around a sword",
	answer4 = "A fire-breathing dragon",
	correctAnswer = 1;
}

var Question6 = {
	question = 'What is "Wall-E"s favorite movie?',
	answer1 = "2001: A Space Odyssey",
	answer2 = "Hello, Dolly!",
	answer3 = "Snow White and the Seven Dwarves",
	answer4 = "West Side Story",
	correctAnswer = 2;
}

var Question7 = {
	question = 'What caused the accident that stranded Sandra Bullock in "Gravity"?',
	answer1 = "A meteor shower",
	answer2 = "An explosion in her ship",
	answer3 = "Debris from a destroyed satellite",
	answer4 = "Her harness breaking",
	correctAnswer = 3;
}

var Question8 = {
	question = 'What was Matthew Mcconaugheys occupation before he agreed to help save the world in "Interstellar"?',
	answer1 = "Farmer",
	answer2 = "Pilot",
	answer3 = "Web developer",
	answer4 = "Preschool teacher",
	correctAnswer = 2;
}

var questions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8]

//Do the following instructions 8 times:
for (var i = 0; i < 8; i++) {
	//Load the question object into current question
	currentQuestion = questions[i];
	//Set timer to 30 seconds and display time remaining in time remaining area
	//???
	//Display next question in message area
	$("#messageArea").html(currentQuestion.question)
	//Display that question's answers in answers area
	$("#answersArea").html(currentQuestion.answer1)
	$("#answersArea").append(currentQuestion.answer2)
	$("#answersArea").append(currentQuestion.answer3)
	$("#answersArea").append(currentQuestion.answer4)
	//If user doesn't select an answer in 30 seconds
	//???
		//Display time out message in message area
		$("#messageArea").html("Time's up!");
		//Increment time outs
		numTimeOut++;
		//Stop timer
		//???
		//Display gif in answers area with a caption (and do anything else that's fun)
		//???
		//Wait 5 seconds
		//???
	//When user selects an answer
	//???
		//If the answer was correct
		//???
			//Display winning message in message area
			$("#messageArea").html("Correct!");
			//Increment correct answers
			numCorrect++;
		//Otherwise
		else {
			//Display losing message in message area
			$("#messageArea").html("Incorrect!");
			//Increment incorrect answers
			numIncorrect++;
		}
		//Stop timer
		//???
		//Display gif in answers area with a caption (and do anything else that's fun)
		//???
		//Wait 5 seconds
		//???
}