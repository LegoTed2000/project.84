// Create a reference for the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


background_img_width = 300;
background_img_height = 100;

var img_image;

background_img_x = 100;
background_img_y = 100;

function add() {
	background_img_imgTag = new Image(); //defining a variable with a new image
	background_img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	background_img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(background_img_imgTag, background_img_x, background_img_y, background_img_width, background_img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 65 && keyPressed <= 90) || (keyPressed >= 97 && keyPressed <= 122)) {
		//write a code to check the type of key pressed
		alphabetkey()
		document.getElementById("d1").innerHTML = "You pressed alphabet key";
	}
	else if ((keyPressed >= 37 && keyPressed <= 40)) {
		arrowkey()
		document.getElementById("d1").innerHTML = "You pressed arrow key";
	}
	else if ((keyPressed >= 48 && keyPressed <= 57)) {
		numberkey()
		document.getElementById("d1").innerHTML = "You pressed number key";
	}
	else if ((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27)) {
		specialkey()
		document.getElementById("d1").innerHTML = "You pressed special key";
	}
	else {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed symbol or other key";
	}
}

function alphabetkey() {
	//upload respective image with the message. 
	img_image = "Alpkey.png";
	add()
}
function numberkey() {
	img_image = "numkey.png";
	add()
}
function arrowkey() {
	img_image = "Arrkey.png";
	add()
}
function specialkey() {
	img_image = "spkey.png";
	add()
}
function otherkey() {
	img_image = "otherkey.png";
	add();
}

