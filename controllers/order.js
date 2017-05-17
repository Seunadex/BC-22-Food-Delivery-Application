
const firebase = require('../helpers/firebase.js');
let express = require('express');
let router = express.Router();
let db = firebase.database();
let fire_base = firebase.auth();




let getOrder = () => {
	let data = {
		userId: user.uid,
		Quantity:  $('#qty').val(),
		Price: $('#price').val()
	}
	console.log(data);
	let ref = db.ref('orders');
	ref.push(data);
};




