// Import the leaflet package
// let L = require("leaflet");

var map = L.map("map").setView([26, 25], 12);

// L.tileLayer("https://api.mapbox.com/v4/base/{z}/{x}/{y}.vector.pbf", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

let url = "https://api.mapbox.com/v4/base/{z}/{x}/{y}.vector.pbf";
console.log(L);
L.vectorGrid.protobuf(url).addTo(map);

// L.marker([26, 25]).addTo(map).bindPopup("A customizable Popup.").openPopup();
