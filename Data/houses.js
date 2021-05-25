var data = {
    "type": "FeatureCollection",
    "name": "houses",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 1, "address_1": "1 Kepier Heights", "postcode": "DH1 1LN", "bedrooms": 6, "bathrooms": 3, "cost_week": 110, "bills_week": 15, "owner": "Private", "score": 7 }, "geometry": { "type": "Point", "coordinates": [ -1.569545692233133, 54.779320216293264 ] } },
    { "type": "Feature", "properties": { "id": 2, "address_1": "22 Elis Street", "postcode": "DH1 2NH", "bedrooms": 4, "bathrooms": 2, "cost_week": 90, "bills_week": 10, "owner": "Private", "score": 5 }, "geometry": { "type": "Point", "coordinates": [ -1.565199516347614, 54.779477641698215 ] } },
    { "type": "Feature", "properties": { "id": 3, "address_1": "39 Claypath", "postcode": "DH1 3KL", "bedrooms": 6, "bathrooms": 4, "cost_week": 120, "bills_week": 10, "owner": "Private", "score": 8 }, "geometry": { "type": "Point", "coordinates": [ -1.571830932915363, 54.778481643057802 ] } },
    { "type": "Feature", "properties": { "id": 4, "address_1": "7 Mount Joy Crescent", "postcode": "DH1 2KL", "bedrooms": 4, "bathrooms": 2, "cost_week": 140, "bills_week": 20, "owner": "Private", "score": 8 }, "geometry": { "type": "Point", "coordinates": [ -1.568782230465365, 54.76938903976702 ] } },
    { "type": "Feature", "properties": { "id": 5, "address_1": "67 Crossgate", "postcode": "DH1 8PH", "bedrooms": 3, "bathrooms": 1, "cost_week": 125, "bills_week": 0, "owner": "Bill Free Homes", "score": 8 }, "geometry": { "type": "Point", "coordinates": [ -1.579855512870659, 54.776150100785891 ] } },
    { "type": "Feature", "properties": { "id": 6, "address_1": "4 Mowbray Street", "postcode": "DH1 8KN", "bedrooms": 4, "bathrooms": 2, "cost_week": 110, "bills_week": 13, "owner": "Private", "score": 6 }, "geometry": { "type": "Point", "coordinates": [ -1.586519855013297, 54.777770656425027 ] } },
    { "type": "Feature", "properties": { "id": 7, "address_1": "1 Redhills Lane", "postcode": "DH1 9JN", "bedrooms": 6, "bathrooms": 2, "cost_week": 100, "bills_week": 10, "owner": "Private", "score": 7 }, "geometry": { "type": "Point", "coordinates": [ -1.588275199724636, 54.776817872601647 ] } }
    ]
    };

    function addExampleData() {

        houseLayer = L.geoJSON(data, {pointToLayer: function(feature, latlng) {
            return L.marker(latlng).bindPopup(housePopUpLayout(feature.properties.address_1, feature.properties.postcode, feature.properties.bedrooms, feature.properties.bathrooms, feature.properties.cost_week, feature.properties.bills_week, feature.properties.owner, feature.properties.score))
            }, }).addTo(mymap);

    }

    function housePopUpLayout(address, postcode, bedrooms, bathrooms, cost_week, bills_week, owner, score) {
        // create the html layout of this
        var popup = 
    }