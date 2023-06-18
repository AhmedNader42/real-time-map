(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
