$(document).ready(function(){
	console.log("test");

//Below Works. Still havor and toggle events are missing.
$("#primary-nav li").on("click",function(){
	// // //To keep the havor function, tried adding class, but it is not working. Therefore, I listed up all change I would like to see when it is clicked.
	// $("#primary-nav li a").removeClass("navActive");
	// $(this).children("a").addClass("navActive");
	// $("#primary-nav li a span").removeClass("navSpanActive");
	// $(this).find("span").addClass("navSpanActive");
	//Tried "Havor" using mouseover but could not make it work.

	$("#primary-nav li a").css( {background: "none", color: "black"});
	$(this).children("a").css( {background: "#666", color: "#f6f666", paddingBottom: "12px", marginBottom: "-2px", zIndex: "2"});
	$("#primary-nav li a span").css("border-right", "1px solid #ddd");
	$(this).find("span").css("border-right", "none");

	//If I use slideToggle, I cannot switch to other page without Toggle.
	// $("#slide-down").slideToggle();
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

	//Without event.preventDefault, site page scroll up to navigation bar whenever list was clicked.
	event.preventDefault();

});




// //Tried "if else" method. When user click list one time,,,, if user click one more time... But below does not work.
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










});