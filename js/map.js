async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const location = { lat: 35.046621, lng: 25.944360 };
    const map = new Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
        mapId: "4504f8b37365c3d0",
        styles: [
        {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#ebe3cd" }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#523735" }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "color": "#f5f1e6" }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#dfd2ae" }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#dfd2ae" }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#f5f1e6" }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#fdfcf8" }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#f8c967" }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#b9d3c2" }
                ]
            }
        ]
    });
                
    var customMarker = document.createElement('div');
    customMarker.className = 'custom-marker';

    const marker = new AdvancedMarkerElement({
        map,
        position: location,
        content: customMarker
    });
}

initMap();