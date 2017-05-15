const firebase = require('firebase');

let config = {
    apiKey: "AIzaSyAsAqUM0CityL2tudyEEmmGpcIoG_0uFQk",
    authDomain: "food-delivery-service-a2076.firebaseapp.com",
    databaseURL: "https://food-delivery-service-a2076.firebaseio.com",
    projectId: "food-delivery-service-a2076",
    storageBucket: "food-delivery-service-a2076.appspot.com",
    messagingSenderId: "546845876251"
  };
  
  module.exports = firebase.initializeApp(config);
