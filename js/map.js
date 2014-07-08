var map;
function initialize() {
    var mapOptions = {
        draggable: false,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: false,
        zoom: 15,
        center: new google.maps.LatLng(52.4509824,13.330616),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);