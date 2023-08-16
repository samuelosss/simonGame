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

// $(".btn").click(function () {
// 	playSounds(this.id);
// });

//after ERROR new start by key stroke
function keyToStart() {}

//ok, doing it my way:
var gamePattern = []; //null
var buttonColours = ["green", "red", "yellow", "blue"];
var randomChosenColour = null;

function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	randomChosenColour = buttonColours[randomNumber];
	addRandColorToPattern();
	// return randomNumber;
}

function addRandColorToPattern() {
	gamePattern.push(randomChosenColour);
}

//adding button functions together adding clicked color to gamepattern
$(".btn").on("click", function () {
	// Toggle the class to "myNewClass" on click
	$(this).toggleClass("pressed");
	// Set a timeout to toggle it back after 100ms
	setTimeout(() => {
		$(this).toggleClass("pressed");
	}, 100);
	playSounds(this.id);
	gamePattern.push(this.id);
	console.log(gamePattern);
});
