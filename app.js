const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const auth = require('./controllers/auth.js');
const order = require('./controllers/order.js');
const firebase = require('./helpers/firebase.js');

dotenv.config();


// Initialize express
const app = express();

//home
app.get('/', (req, res) =>{
	res.render("index", {error: null});
});

// Register page
app.get('/register', (req, res) => {
	res.render('register', {error: null});
});

// Set up template engine
app.set('views', process.cwd() + '/views');
app.set('view engine', 'ejs');

// Static files
app.use(express.static('assets'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// getting post data
app.post('/register', auth.register);
app.post('/', auth.login);
app.get('/signOut', auth.signOut);


app.use('/dashboard', (req, res, next) => {
	next()
}, require('./routes/dashboard.js'));



// fire controllers
order(app);

// Listen to a port
app.listen(process.env.PORT || 3000, ()=> {
	console.log('You are listening to port 3000')
});
