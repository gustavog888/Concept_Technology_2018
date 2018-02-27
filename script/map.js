function initialize() {
  var myLatLng = {lat: 25.840432, lng: -80.2088057};
  var styleArray = [
    {
      featureType: 'all',
      stylers: [
        { hue: "#0f75bd" },
        { saturation: -60 },

      ]
    },{
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { lightness: 70 },
        { visibility: "simplified" }
      ]
    },{
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 13,
    scrollwheel: false,
    scaleControl: false,
    zoomControl: false,
    scaleControl: false,
    center: new google.maps.LatLng(25.840432, -80.2088057),
    styles: styleArray
  };

  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
