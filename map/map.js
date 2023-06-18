// Import the leaflet package
var L = require('leaflet');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map('map').setView([426.8, 30.8], 12);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=Qfd9hpgqjAk9atvIkh5v', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adds a popup marker to the webmap for GGL address
L.circleMarker([26.8, 30.8]).addTo(map)
    .bindPopup(
        'MON 304<br>' +
        'Monetary Times Building<br>' +
        '341 Victoria Street<br>' +
        'Toronto, Ontario, Canada<br>' +
        'M5B 2K3<br><br>' +
        'Tel: 416-9795000 Ext. 5192'
    )
    .openPopup();