$(document).ready(function() {

	$('#slideshow').slippry();

	$(".mobile_nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});


});