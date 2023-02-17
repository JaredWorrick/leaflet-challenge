// Creating the map object
var myMap = L.map("map", {
  // 34.0522° N, 118.2437° W
  center: [40, -90],
  zoom: 4
});


// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Getting our GeoJSON data
d3.json(link).then(function(data) {
  L.geoJson(data, {
    
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
      "</h3><hr><p>Magnitude: " + feature.properties.mag + "</p>");
    }
}).addTo(myMap);
  
});

