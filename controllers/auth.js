
let firebase = require("firebase");
let config = {
    apiKey: "AIzaSyAsAqUM0CityL2tudyEEmmGpcIoG_0uFQk",
    authDomain: "food-delivery-service-a2076.firebaseapp.com",
    databaseURL: "https://food-delivery-service-a2076.firebaseio.com",
    projectId: "food-delivery-service-a2076",
    storageBucket: "food-delivery-service-a2076.appspot.com",
    messagingSenderId: "546845876251"
  };
  
firebase.initializeApp(config);


let db = firebase.database();
let ref = db.ref();
let fire_base = firebase.auth();

//register user
module.exports.register = (req, res) => {
    let full_name = req.body.full_name,
        email = req.body.email,
        password = req.body.password;

    fire_base.createUserWithEmailAndPassword(email, password)
        .then(res.redirect('/dashboard'))
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            console.log(err);
            res.redirect('/')
    });
}


//signin with email and password
module.exports.login = (req, res) => {
    let full_name = req.body.full_name,
        email = req.body.email,
        password = req.body.password;

    fire_base.signInWithEmailAndPassword(email, password)
        .then((user) => {
            res.redirect('/dashboard');
        })
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            return res.render('index', {error: errorMessage});
        });  
}

//sigin with google
module.exports.google = (req, res) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    return fire_base.signInWithPopup(provider)
        .then((user) => {
            res.redirect('/dashboard');
        })
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            return res.render('index', {error: errorMessage});
        });
}

//signOut
module.exports.signOut = (req, res) => {
    fire_base.signOut()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            return res.render('index', {error: errorMessage});
        });
}