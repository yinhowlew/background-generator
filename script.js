var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var img = document.querySelector("img")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateNumber() {
	color1.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	color2.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	setGradient();
}

// function changeImage() {
// 		img.setAttribute("src", "test2.jpg");
// }

// function changeImage() {
// 		img.src = "test2.jpg";
// }


function changeImage() {
	if(img.src === "file:///Users/yinhow/Documents/Programming/Javascript/backgroundGeneratorExercise/test.jpg") {
		img.setAttribute("src", "test2.jpg");
	}
	else {
		img.setAttribute("src", "test.jpg");
	}
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener('load',setGradient);

button.addEventListener("click", generateNumber);

img.addEventListener("click", changeImage);


/* NOTE:  it's important to have changeImage declared and put as
reculsive function. ELSE the image will change even without event!!

ADD a if condition to switch photo on every click

*/

/*1. Write code so that the colour inputs match the background generated on the first page load. 
// color1.value = red;
// color2.value = yellow;

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.*/