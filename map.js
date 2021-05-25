function loadLeafletMap () {

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
}

function go_to_city (val) {
    if (val === 1) {
        mymap.flyTo([54.776100, -1.573300], 15);
    }
    if (val === 2) {
        mymap.flyTo([53.800755, -1.549077], 15);
    }
    if (val === 3) {
        mymap.flyTo([54.978252, -1.617780], 15);
    }
} 