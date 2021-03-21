// Get dependencies
const express = require('express');
const router = require('express').Router()

const app = express();
const PORT = process.env.PORT || 3001;


// Static files 
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

// Parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

router.get('/', (req, res) => {
    res.render('index')
});
router.get('/about', (req, res) => {
    res.render('about-me');
});

app.use(router);
// Lsten on port
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });