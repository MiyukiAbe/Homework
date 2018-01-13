
//Homework
	// Call $.val() on inputs to get the string value of your user's input -- done

	//document.getElementById("city-type").value;  used this  "var city = $("#city-type").val();""

	// Store user input in var city ---done

	// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button ----done

	// Create if / else if / else conditionals to control the flow of your application --- done

	// Write at least six different lines of pseudocode and display them inline as JavaScript comments --- done

	// Prevent a form submission using the event.preventDefault() function ---done

	// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded ---done

	// Get the first element from an attribute name using $.attr() ---

	// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code --done


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
			//show the defult background image and alert



$(document).ready(function(){
	
//capitalized input
$('#city-type').keyup(function() {
	$(this).val($(this).val().toUpperCase());
});

 $("#submit-btn").click(function() {
		var city = $("#city-type").val();
  		changeImage(city);
  		event.preventDefault();
});
 
	function changeImage(city) {
  	if (city === "NEW YORK" || city === "NY" || city === "NYC") {
  		$("body").addClass("nyc");
   		// $("body").css("background-image", "url(images/nyc.jpg)");
  } else if (city === "SF" || city === "SAN FRANCISCO" || city ==="BAY AREA") {
  		$("body").addClass("sf");
  		// $("body").css("background-image", "url(images/sf.jpg)");
  } else if (city === "LA" || city === "LOS ANGELES" || city ==="LAX") {
  		$("body").addClass("la");
		// $("body").css("background-image", "url(images/la.jpg)");
  } else if (city === "ATX" || city === "AUSTIN") {
  		$("body").addClass("austin");
  		// $("body").css("background-image", "url(images/austin.jpg)");
  } else if (city ==="SYD" || city === "SYDNEY") {
  		$("body").addClass("sydney");
  		// $("body").css("background-image", "url(images/sydney.jpg)");
  } else {
   		alert("Try something else!");
  }
}

//Below also works!!
// $("#submit-btn").click(function() {
// 		var city = $("#city-type").val();
//   	if (city === "New York" || city === "NY" || city === "NYC") {
//   		$("body").addClass("nyc");
//   } else if (city === "SF" || city === "SAN FRANCISCO" || city ==="BAY AREA") {
//   		$("body").addClass("sf");
//   } else if (city === "LA" || city === "LOS ANGELES" || city ==="LAX") {
//   		$("body").addClass("la");
//   } else if (city === "ATX" || city === "AUSTIN") {
//   		$("body").addClass("austin");
//   } else if (city ==="SYD" || city === "SYDNEY") {
//   		$("body").addClass("sydney");
//   } else {
//    	alert("Try something else!");
//   }
// 	event.preventDefault();

// });

});