
const firebase = require('../helpers/firebase.js');
let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();

//connect to database
let db = firebase.database();
let ref = db.ref('orders');
let fire_base = firebase.auth();
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
app.post('/save_orders', urlencodedParser, function(req, res) {
	// Add order details to the database
	var name = req.body.fullName;
	var address = req.body.inputAddress;
	var phone = req.body.inputPhone;
	var quantity = req.body.qty;
	var total_price = req.body.price;
	// console.log(name, address, phone, quantity, total_price);
	var orders = {Full_name: name,
								address: address,
								phone_number: phone,
								quantity: quantity,
								total_price: 1221,
								timeStamp: new Date().toString()
							};
		// console.log(orders);

	// var user =  fire_base.currentUser;
	// if (user) {
	// 	userId = user.uid;

	// 	orderRef.child('/' + userId).push(orders).then(res.redirect('/save_orders'))
	// 					.catch(function(err) {
	// 						let errorCode = err.code;
	// 						let errorMessage = err.message;
	// 						return res.render('register', {error: errorMessage});
	// 					});
	// }

	var ordersRef = ref.child('order details');
	var orderRef = ref.push(orders);
	// orderRef.child(orderRef.key).set(orders);
	orderRef.orderByKey().limitToLast(1).on('child_added', function(snap) {
		console.log('added', snap.val());
	});
	res.render('dashboard');
});


};





