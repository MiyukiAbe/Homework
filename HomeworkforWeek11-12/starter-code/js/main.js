//When user click the child of "primary-nav',
//Show "slid down" the matching of the ID


	//Which article needs to happen


//When slid down is alreay display, don't slide down
//If user click the same "list" again, id"sild down" is hiden
//If user click different "list", do not show slid down
//
//click international in list, change it to 
//LInk already open
$(document).ready(function(){
	console.log("test");

// //Tried if else method. When user click one time,,,, if user click one more time... But below does not work.
//  $("#primary-nav li").on("click",function(){
// 	var isCalledOnce = true;
// 	if (isCalledOnce === true) {
// 	$("#primary-nav li").on("click", clickedOnce);
// } else
// 	$("#slide-down").css("display", "none");
// });
// function clickedOnce(isCalledOnce) {
// 		$("#primary-nav li a").css( {background: "none", color: "black"});
// 		$("#primary-nav li a span").css("border-right", "1px solid #ddd")
// 		$(this).children("a").css( {background: "#666", color: "yellow", paddingBottom: "12px", marginBottom: "-2px", zIndex: "2"});
// 		$(this).find("span").css("border-right", "none");
// 		$("#slide-down").slideDown();
// 		$(".drop").css("display", "none");
// 		if ($(this).hasClass ("international") ){
// 			$(".international").show();
// 	}   if ($(this).hasClass ("politics") ) {
// 			$(".politics").show();
// 	}	if ($(this).hasClass ("business") ) {
// 			$(".business").show();
// 	}	if ($(this).hasClass ("technology") ) {
// 			$(".technology").show();
// 	}   if ($(this).hasClass ("culture") ) {
// 			$(".culture").show();
// 	}	if ($(this).hasClass ("blogs") ){
// 			$(".blogs").show();
// 	}	
// }


//Below Works. Still hovor function is missing. and also, hiding #slide-down when user click the same list again.
$("#primary-nav li").on("click",function(){
	$("#primary-nav li a").css( {background: "none", color: "black"});
	$("#primary-nav li a span").css("border-right", "1px solid #ddd");
	//adding class is not working.
	//$(this).children("a").addClass("navActive");
	$(this).children("a").css( {background: "#666", color: "#f6f666", paddingBottom: "12px", marginBottom: "-2px", zIndex: "2"});
	$(this).find("span").css("border-right", "none");
	// $("#slide-down").slideToggle(); keep closing
	$("#slide-down").slideDown();
	$(".drop").css("display", "none");
		if ($(this).hasClass ("international") ){
			$(".international").show();
	}   if ($(this).hasClass ("politics") ) {
			$(".politics").show();
	}	if ($(this).hasClass ("business") ) {
			$(".business").show();
	}	if ($(this).hasClass ("technology") ) {
			$(".technology").show();
	}   if ($(this).hasClass ("culture") ) {
			$(".culture").show();
	}	if ($(this).hasClass ("blogs") ){
			$(".blogs").show();
	}	

	event.preventDefault();
	// if $("#primary-nav li").on("click", function() {
	// }	$("#slide-down").slideToggle(); tried to add if statement to toggle, but it does not work.
	
});


//If I delete below, clicked list background stays as dark grey.
$("#primary-nav li").mouseover(function(){
	$("#primary-nav li a").css("background", "none");
	$(this).children("a").css("background", "#f6f6f6");
	event.preventDefault();
});

	
//When user click the li, SlideToggle down

// $("#primary-nav .international").on("click", function() {
// 	// $(this).children("a").slideToggle();
// 	$("#slide-down").slideToggle();
// 	$(".international").show();
// 	// $("").hasClass("#slide-down");
// 	//this work

// });

//When user click international on primary-nav,
	//hide all drop except unhide class international
//When user click politics on primary-nav
	//hide all drop except unhide class politics
//When user click Business.....


// $("#primary-nav li").on("click", function() {
// 	$("#slide-down").slideToggle();
// });





//slide-down needs to stay but class will change   hasClass



// add to all section.
// (this) active 






});