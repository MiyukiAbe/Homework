$(document).ready(function(){


//
	var slide = 0
	var food =["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg","images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg"]
	
	$("input[type=button][value=Skip]").on("click", function(){
		slide += 1
		$("#image-to-vote-on").attr("src", food[slide]);
		if(slide == food.length - 1) {
			$("#result").append("<p>You have reached the end. Total deliciousness score was :</p>" + vote)
			
		}
	});

	$("input[type=button][value=Back]").on("click", function(){
		slide -= 1
		$("#image-to-vote-on").attr("src", food[slide]);
	});

//When user picks the number from options, store the value and add +1 to slide.

//when the user pick the options, add 1 to the slide.
	var vote = 0;
	$("#your-vote").on("change", function(){
		vote += Number($(this).val());
		slide += 1
		$("#image-to-vote-on").attr("src", food[slide]);
		if(slide == food.length - 1) {
			$("#result").append("<p>You have reached the end. Total deliciousness score was :</p>" + vote)
			
		}
		console.log(vote);
	});





});