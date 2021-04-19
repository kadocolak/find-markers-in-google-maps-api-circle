function initMap() {	 
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.0637990923183, lng: 28.78382109918516},
          zoom: 13,
	  disableDefaultUI: !0, scaleControl: !0, fullscreenControl: !0,
          clickableIcons: false,
          minZoom: 3,
          maxZoom: 20
  });
  var stadium = new google.maps.LatLng(41.07444895969522, 28.765437643877718);
  var avm = new google.maps.LatLng(41.06320196648882, 28.80718122666873);
  var radius=2500;
  var marker = new google.maps.Marker({
        position: stadium,
        map: map,
        title: 'Atatürk Olimpiyat Stadyumu'
  });
  const regionCircle = new google.maps.Circle({
                 strokeColor: "#FF0000",
                 strokeOpacity: 0.8,
                 strokeWeight: 2,
                 fillColor: "#FF0000",
                 fillOpacity: 0.19,
                 map: map,
                 center: avm,
                 radius: radius,
		 clickable: false
  });
  var check = checkCircleInMarker(stadium, avm, radius);
  if (check) alert("In the region");
  else alert("Out the region");
}
initMap();
function checkCircleInMarker(markerPosition, circlePosition, radius) {
  var km = radius/1000;
  var kx = Math.cos(Math.PI * circlePosition.lat / 180) * 111;
  var dx = Math.abs(circlePosition.lng - markerPosition.lng) * kx;
  var dy = Math.abs(circlePosition.lat - markerPosition.lat) * 111;
  return Math.sqrt(dx * dx + dy * dy) <= km;
}
