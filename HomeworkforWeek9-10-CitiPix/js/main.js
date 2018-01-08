
//Homework
	// Call $.val() on inputs to get the string value of your user's input

	//document.getElementById("city-type").value;

	// Store user input in var city

	// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button

	// Create if / else if / else conditionals to control the flow of your application

	// Write at least six different lines of pseudocode and display them inline as JavaScript comments (dpne)

	// Prevent a form submission using the event.preventDefault() function

	// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded

	// Get the first element from an attribute name using $.attr()

	// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code




//My note
	//Listen to "submit button" to be clicked. Then, change the image based on "city" value
		//if var city = "NEW YORK", "NY", "NYC"
			//change back ground image to NYC.
		//else if it says "SAN FRANCISCO" or "SFC" or BAY AREA"
			//change the back ground image to SFC
		//else if it says "LOS ANGELES" or "LA" or "LAX"
			//change the back ground image to LAX
		//else if it says "AUSTIN" or "ATX"
			//chabnge the background image to 
		//else if it says "SYDNEY" or "SYD"
			//change the background image to sydney.jpg
		//else
			//show the defult background image

$(document).ready(function(){

var city = $("#city-type").val();
$("#submit-btn").click(changeImage);

function changeImage(city) {
  if (city === "New York" || city === "NY" || city === "NYC") {
  	// $("body").addClass("nyc") this does not work. Also "New York", "NYC"...did not work.
   		$("body").css("background-image", "url(images/nyc.jpg)");
  } else if (city === "SF" || city === "SAN FRANCISCO" || city ==="BAY AREA") {
  		$("body").css("background-image", "url(images/sf.jpg)");
  } else if (city === "LA" || city === "LOS ANGELES" || city ==="LAX") {
		$("body").css("background-image", "url(images/la.jpg)");
  } else if (city === "ATX" || city === "AUSTIN") {
  		$("body").css("background-image", "url(images/austin.jpg)");
  } else if (city ==="SYD" || city === "SYDNEY") {
  		$("body").css("background-image", "url(images/sydney.jpg)");
  } 
}

// changeImage(city); does not work. Having difficulty connecting input as value.
changeImage("SF");


// need to put below items to somewhere...
// 	event.preventDefault();
// 	var = return

//below alert worked
//When the user type words inside form && click the button,
	//show alert 
// $("#submit-btn").click(function() {
// 		var city = $("#city-type").val();
//   	alert(city);
//   	event.preventDefault();
// });

//Below click button and change background worked
// $("button").on("click", changeImage)
// function changeImage() {
//   $("body").css("background-image", "url(images/nyc.jpg)");
// }


});