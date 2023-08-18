// var gamePattern = [];

// var buttonColours = ["green", "red", "yellow", "blue"];

// function nextSequence() {
// 	var randomNumber = Math.floor(Math.random() * 4);
// 	return randomNumber;
// }

// var randomChosenColour = buttonColours[nextSequence()];

// gamePattern.push(randomChosenColour);

// $(".btn").on("click", function () {
// 	setTimeout(function () {
// 		$(this).addClass("pressed");
// 	}, 2000);
// });

// $(".btn").on("click", function () {
// $(this).addClass("pressed");
// // setTimeout(function () {
// // 	$(this).remove("pressed");
// // }, 100);
// // $(this).removeClass("pressed");
// });

//just checking
// $(".btn").on("click", function(){
// 	alert("clicked button");
// });

// setTimeout(function () {
// 	$(".btn.green").addClass("pressed");
// }, 1000);

//couldn't figure out.. help by Bing AI
// Assume you have an element with id="myElement" and class="myClass"
// $("#myElement").click(function() {
//   // Toggle the class to "myNewClass" on click
//   $(this).toggleClass("myNewClass");
//   // Set a timeout to toggle it back after 100ms
//   setTimeout(() => {
//     $(this).toggleClass("myNewClass");
//   }, 100);
// });
// $(".btn").click(function() {
//   // Toggle the class to "myNewClass" on click
//   $(this).toggleClass("pressed");
//   // Set a timeout to toggle it back after 100ms
//   setTimeout(() => {
//     $(this).toggleClass("pressed");
//   }, 100);
// });
//or I change it to this -
// $(".btn").on("click", function () {
// 	// Toggle the class to "myNewClass" on click
// 	$(this).toggleClass("pressed");
// 	// Set a timeout to toggle it back after 100ms
// 	setTimeout(() => {
// 		$(this).toggleClass("pressed");
// 	}, 100);

// });
//does it work the same?
//NOPE..
// $(".btn").on("click", function () {
// 	// Toggle the class to "myNewClass" on click
// 	$(this).toggleClass("pressed");
// 	// Set a timeout to toggle it back after 100ms
// 	setTimeout(function() {
// 		$(this).toggleClass("pressed"); //not even removeClass
// 	}, 100);
// });
//now I know why, because "this" is bound to object.window in this case,
//I would need to create var self = this; and within function use "self" instead
//but arrow functions => don't have "this" bound and that's why it works

//now I want to add sound to the click
// Create an audio element with the sound source
//   var audio = new Audio("click.mp3");
// Play the sound when the element is clicked
//   audio.play();
//but I need to figure out HOW TO PLAY DIFFERENT SOUNDS FOR DIFFERENT COLOR BUTTONS

// function playSounds(color) {
// 	switch (color) {
// 		case "green":
// 			var soundGreen = new Audio("./sounds/green.mp3");
// 			soundGreen.play();
// 			break;
// 		case "red":
// 			var soundRed = new Audio("./sounds/red.mp3");
// 			soundRed.play();
// 			break;
// 		case "blue":
// 			var soundBlue = new Audio("./sounds/blue.mp3");
// 			soundBlue.play();
// 			break;
// 		case "yellow":
// 			var soundYellow = new Audio("./sounds/yellow.mp3");
// 			soundYellow.play();
// 			break;
// 		case "error":
// 			var soundError = new Audio("./sounds/wrong.mp3");
// 			soundError.play();
// 			break;
// 		default:
// 			alert("Some problem with sound function?");
// 			break;
// 	}
// }

// $(".btn").click(function () {
// 	playSounds(this.id);
// });

//ok, doing it my way:
// var gamePattern = []; //null
// var buttonColours = ["green", "red", "yellow", "blue"];
// var randomChosenColour = null;

// function nextSequence() {
// 	var randomNumber = Math.floor(Math.random() * 4);
// 	randomChosenColour = buttonColours[randomNumber];
// 	addRandColorToPattern();
// 	// return randomNumber;
// }

// function addRandColorToPattern() {
// 	gamePattern.push(randomChosenColour);
// }

//PAUSED
//adding button functions together adding clicked color to gamepattern
// $(".btn").on("click", function () {
// 	// Toggle the class to "pressed" on click
// 	$(this).toggleClass("pressed");
// 	// Set a timeout to toggle it back after 100ms
// 	setTimeout(() => {
// 		$(this).toggleClass("pressed");
// 	}, 100);
// 	playSounds(this.id);
// 	gamePattern.push(this.id); // add color to the array
// 	console.log(gamePattern);
// });
//PAUSED

//add random color to the original array when LEVEL UP and do "play" section

//create new array playerGamePattern

//after each click compare original gamePattern and playerGamePattern if they match so far, when comes to an end, do LEVEL UP
//this has to be separate section

//when arrays compared don't match, do ERROR (messsage, keystroke to begin new game, play sound)

// //new pattern
// var playerGamePattern = [];

// $(".btn").on("click", function () {
// 	// Toggle the class to "pressed" on click
// 	$(this).toggleClass("pressed");
// 	// Set a timeout to toggle it back after 100ms
// 	setTimeout(() => {
// 		$(this).toggleClass("pressed");
// 	}, 100);
// 	playSounds(this.id);
// 	playerGamePattern.push(this.id); // add color to the array
// 	console.log(playerGamePattern);
// });

// //length of new pattern
// var lengthPlayerGamePattern = playerGamePattern.length;

// //slices of old and new patterns
// var sliceOld = gamePattern.slice();
// var sliceNew = playerGamePattern.slice();

// //compare them
// function compare() {
// 	lengthPlayerGamePattern = playerGamePattern.length;
// 	sliceOld = gamePattern.slice(0, lengthPlayerGamePattern);
// 	sliceNew = playerGamePattern.slice();
// 	if (sliceOld.toString() === sliceNew.toString()) {
// 		// ERROR function/s
// 		console.log("YES continue!");
// 	} else {
// 		//CONTINUE playing / clicking
// 		console.log("ERROR maybe next time! ;)");
// 	}
// }

// function errorEnd() {
// 	// sound ERROR sound
// 	playSounds("error");
// 	//change H1 "Press a Key to Start"
// 	$("h1#level-title").html("Press A Key to Start");
// 	//go to function start new game
// }

// var levelNumber = "";

// //new game start
// function newGame() {
// 	$(document).keypress(function () {
// 		levelNumber = 0;
// 		$("h1#level-title").html("Level " + levelNumber);
// 	});
// 	setTimeout(function () //wait and chose random color and flick and beep
// 	{
// 		nextSequence();
// 		playSounds(randomChosenColour);
// 		$("#" + randomChosenColour).toggleClass("pressed"); //flick
// 		setTimeout(function () {
// 			$("#" + randomChosenColour).toggleClass("pressed");
// 		}, 100); //flick back
// 	}, 1300);
// }

//now let's try to put it together /////////////////
///////////////////////

//define sounds funtion
function playSounds(color) {
	switch (color) {
		case "green":
			var soundGreen = new Audio("./sounds/green.mp3");
			soundGreen.play();
			break;
		case "red":
			var soundRed = new Audio("./sounds/red.mp3");
			soundRed.play();
			break;
		case "blue":
			var soundBlue = new Audio("./sounds/blue.mp3");
			soundBlue.play();
			break;
		case "yellow":
			var soundYellow = new Audio("./sounds/yellow.mp3");
			soundYellow.play();
			break;
		case "error":
			var soundError = new Audio("./sounds/wrong.mp3");
			soundError.play();
			break;
		default:
			alert("Some problem with sound function?");
			break;
	}
}

//basic vars
var gamePattern = []; //null
var buttonColours = ["green", "red", "yellow", "blue"];
var randomChosenColour = null;

//define adding to first game array when random runs - creating randomised pattern
function addRandColorToPattern() {
	gamePattern.push(randomChosenColour);
}

// random color
function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4); // define random number 1-4
	randomChosenColour = buttonColours[randomNumber]; // pick color on defined number
	addRandColorToPattern();
}

// pattern created by player clicking buttons
var playerGamePattern = [];

function pressColorButton() {
	$(".btn").on("click", function () {
		// Toggle the class to "pressed" on click
		$(this).toggleClass("pressed");
		// Set a timeout to toggle it back after 100ms
		setTimeout(() => {
			$(this).toggleClass("pressed");
		}, 100);
		playSounds(this.id);
		playerGamePattern.push(this.id); // add color to the player array
		compare1(); // comparison of arrays --- LAST ADDITION AND IT WORKS NOW :D
		// compare2(); // compare length of arrays, if same, NEXT LEVEL
	});
}

function errorEnd() {
	// sound ERROR sound
	playSounds("error");
	//change H1 "Press a Key to Start"
	// $("h1#level-title").html("Press A Key to Start");
	playerGamePattern = [];
	gamePattern = [];
	randomChosenColour = [];
	levelNumber = [];

	//go to function start new game
	newGame();
}

var levelNumber = "";

////Patterns comparison
//length of new pattern
var lengthPlayerGamePattern = playerGamePattern.length;

//slices of old and new patterns
var sliceOld = gamePattern.slice();
var sliceNew = playerGamePattern.slice();

//compare them
function compare1() {
	lengthPlayerGamePattern = playerGamePattern.length;
	sliceOld = gamePattern.slice(0, lengthPlayerGamePattern);
	sliceNew = playerGamePattern.slice();
	if (sliceOld.toString() === sliceNew.toString()) {
		// cannot just === compare, needs to string them
		//CONTINUE playing / clicking
		// loop needed until length of two arrays equals, then NEW LEVEL
		console.log("YES continue!");
		if (playerGamePattern.length === gamePattern.length) {
			{
				setTimeout(newLevel(), 0); //rather not wait
			}
		}
	} else {
		// ERROR function/s

		errorEnd();
		// newGame();
		console.log("ERROR maybe next time! ;)");
	}
	// if (playerGamePattern.length === gamePattern.length) {
	// 	newLevel();
	// }
}

//new game start
function newGame() {
	gamePattern = [];
	playerGamePattern = [];
	levelNumber = 1;
	$("h1#level-title").html("Press A Key to Start");
	$(document).one("keypress", function () {
		//press only one time!! .one()
		$("h1#level-title").html("Level " + levelNumber);
		pressColorButton();
		setTimeout(function () //wait and chose random color and flick and beep
		{
			nextSequence();
			playSounds(randomChosenColour);
			$("#" + randomChosenColour).toggleClass("pressed"); //flick
			setTimeout(function () {
				$("#" + randomChosenColour).toggleClass("pressed");
			}, 100); //flick back
			console.log(gamePattern);
		}, 1300);
	});
}

// setup the page, create empty array, wait for key press
//startgame fn

// function colorPickLoop() {
// 	for (var i = playerGamePattern; i <= gamePattern.length; i++) {
// 		compare(); //if else to ERROR
// 		console.log(i);
// 	}
// }

//LEVEL UP

function newLevel() {
	levelNumber++;
	playerGamePattern = [];
	setTimeout(function () //wait and chose random color and flick and beep
	{
		$("h1#level-title").html("Level " + levelNumber);
		setTimeout(function () {
			nextSequence();
			playSounds(randomChosenColour);
			$("#" + randomChosenColour).toggleClass("pressed"); //flick
			setTimeout(function () {
				$("#" + randomChosenColour).toggleClass("pressed");
			}, 100); //flick back
			console.log(gamePattern);
		}, 500);
	}, 1000);
}

newGame();
