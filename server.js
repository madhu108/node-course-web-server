const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}:${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('unable to append to server.log.');
        };
    });
    next();
});

//app.use((req, res, next) => {
//    res.render('maintanance.hbs', {});
//});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'hare Krishna to everyone hariboooool'
    });

});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page'
    });
});

app.get('/maintanance', (req, res) => {
    res.render('maintanance.hbs', {
        pageTitle: 'maintanance page'
    });
});


app.get('/bad', (req, res) => {
    res.send({
        status: 'error while loading page'
    });
});

//http://192.168.1.100:3000 - to see on phone
app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

////from www.stackoverflow.com/questions/30712141/connect-to-localhost3000-from-another-computer-expressjs-nodejs
//app.listen(3000, '0.0.0.0', function() {
//    console.log('Listening to port:  ' + 3000);
//});