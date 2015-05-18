$(document).ready(function() {
	console.log("The document is ready!");

	$(".dark").click(function() {
		$('body').css("background", "#000 url(img/dark_wood.png) repeat");
	});

	$(".light").click(function() {
		$('body').css("background", "#000 url(img/tileable_wood_texture.png) repeat");
	});

	$(".forest").click(function() {
		$('body').css("background", "#000 url(img/forest.jpg) no-repeat");
		$('body').css("background-size", "cover");
	});

	$(".low").click(function() {
		
	});
})
