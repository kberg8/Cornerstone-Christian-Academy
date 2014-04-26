$(document).ready(function() {

	$('#slideshow').slippry();

	$(".mobile_nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});

	new Maplace({
	show_markers: true,
	locations: [{
		lat: 47.652427, 
		lon: -117.347926,
		zoom: 18
		}]
	}).Load();

	console.log('Page Loaded. Lets Do this!');



});