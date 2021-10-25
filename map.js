function loadLeafletMap () {
    // This function will load the actual base map

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
}

btnDurham.addEventListener('click', function() {
    // when the london button is clicked, it will return the test data set running from a local host
    // need to make sure that on the db side, that the data is returned in geoJSON format

    let url = 'http://localhost:3000/testhomes';

    $.ajax({
        url:url, 
        crossDomain: true,
        type: "GET",
        success: function (res) {

            //var data = res[0].features;
            var data = res[0];
            console.log(data);
        
            var london_layer = L.geoJSON(data, {pointToLayer: function(feature, latlng) {
                return L.marker(latlng).bindPopup("<b>"+feature.properties.review_id +"</b>")
            }}).addTo(mymap);
            
            mymap.fitBounds(london_layer.getBounds());       
         }
    });

}, false)