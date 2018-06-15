alert ("Hello, Batfan. It's about time we met. You consider yourself a fan of the world's greatest detective? Well you'll have to use your own detective skills to save Bataman's life. Somewhere in the compound, he is my prisoner. I will only spare him if you can solve my riddles.")

$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	clickSound.play();
	generateHTML();

	timerWrapper();

});

$("body").on("click", ".answer", function(event){

	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {


		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
});

$("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
});

});

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>I knew you'd fail!" + "</p>" + "<img class='center-block img-wrong' src='assets/images/loss.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/loss.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["In what year was Batman created?", "What is the capital of Liberia?", "What is the name of the original Robin?", "What is the capital of Japan?", "Before being reimagined as Mr. Freeze, what monicker did Victor Fries use?", "What is the capital of Turkey?", "After being crippled by Bane, who took over the mantle of Batman while Bruce recovered?", "who Framed Roger Rabbit?", "What is the name of the man who killed Thomas and Martha Wayne?", "How much wood could a woodchuck chuck?", "After his resurrection, what was the name of Jason Todd, the second Robin's, alter-ego?"];
var answerArray = [["1929", "1939", "1937", "1927"], ["Arthington","Monrovia","Tuzon","Marshall"], ["Damien Wayne","Jason Todd","Dick Grayson","Time Drake"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Mr. Zero", "Mr. Ice", "Mr. Snow", "Snowman"], ["Ankara","Istanbul","Antalya","Bursa"], ["Superman","Alfred","Robin","Azrael"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Joe Chill", "Ras Al Ghul", "Jack Napier", "The Joker"], ["Mumbai","Hyderabad","Bangalore","New Delhi"], ["Red Mask", "Black Mask", "Red Hood", "Black Hood"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/bmanOrigin.jpg'>", "<img class='center-block img-right' src='img/liberia.png'>", "<img class='center-block img-right' src='<img class='center-block img-right' src='assets/images/Grayson.jpg'>", "<img class='center-block img-right' src='img/japan.png'>", "<img class='center-block img-right' src='assets/images/mrZero.jpg'>", "<img class='center-block img-right' src='img/turkey.png'>", "<img class='center-block img-right' src='assets/images/Azrael.jpg'>", "<img class='center-block img-right' src='img/india.png'>", "<img class='center-block img-right' src='assets/images/joeChill.jpg'>", "<class='img' src=na>", "<img class='center-block img-right' src='assets/images/redHood.jpg'>" ];
var correctAnswers = ["B. 1939", "B. Monrovia", "C. Dick Grayson", "C. Mr. Zero", "A. Mr. Zero", "C. Azrael", "D. Azrael", "D. New Delhi", "A. Joe Chill", "A. Ya Motha", "C. Red Hood"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var clickSound = new Audio("sound/button-click.mp3");
