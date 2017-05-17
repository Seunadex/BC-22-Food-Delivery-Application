
const firebase = require('../helpers/firebase.js');
let express = require('express');
let router = express.Router();
let db = firebase.database();
let fire_base = firebase.auth();
let ref = db.ref('order');
let orderRef = ref.child('details');

module.exports.save_order = (req, res) => {
	let order_qty = req.body.quantity,
			total_price = req.body.price,
			userId;

		let user = fire_base.currentUser;
				if(user) {
					//get user's userId
					userId = user.uid;

				orderR.child('/' + userId).push({
					order_qty,
					total_price
				})
				.then(res.redirect('/dashboard'))
					.catch((err) => {
						let errorCode = err.code;
						let errorMessage = err.message;
						return res.render('/dashboard', {error: errorMessage});
					});
				}
}








