const express = require('express');
//const morgan = require('morgan');
const app = express();
const path = require('path');



//settings
app.set('port', 3000); //Para usar el puerto 3000
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //Para poder cambiar la extension .ejs a .html. index.ejs se le puede colocar index.html
app.set('view engine', 'ejs');

//middlewares
//app.use(morgan('dev'));

//routes
app.use(require('./routes/index'));

//app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.render('index');

//});

// static files
app.use(express.static(path.join(__dirname, 'public')));

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
