$(document).ready(function() {

	$('#slideshow').slippry();

	$(".mobile_nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});

});

function initialize() {

	var myLatlng = new google.maps.LatLng(47.652427, -117.347926);
	var mapOptions = {
	    zoom: 15,
	    center: myLatlng
	}

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Professional Eye Care Associates of America (PECAA)</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Address</b><br /> address<br />address ' +
      '</div>'+
      '</div>';

	  var infowindow = new google.maps.InfoWindow({
	      content: contentString
	  });

	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'PECAA!'
	});

	google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  	});

	}

	function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	      'callback=initialize';
	  document.body.appendChild(script);
	}

	window.onload = loadScript;