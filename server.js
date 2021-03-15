// Get dependencies
const express = require('express');

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

app.get('/', (req, res) => {
    res.render('index')
})


// Lsten on port
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });