var express = require('express');
var app = express();
var path = require('path');
var pool= require('./connection_tools/connection_pool.js');
var hbs = require('express-handlebars');
const routes = require('./routes/router');
var bodyparser = require('body-parser');


//handlebars engine setup
app.set('views',path.join(__dirname,'/views'));
app.engine('hbs',hbs({extname:'hbs',defaultLayout:'main_layout',layoutDir:__dirname + "/views/layouts"}));
app.set('view engine','hbs');

//set route and static file locations
app.use(express.static('public'));
app.use('/',routes);
app.use('/scripts', express.static(__dirname + '/node_modules/jquery-circle-progress/dist'));


//drain connection pool
process.on('exit',function(){
  console.log('draining pool...')
  pool.end();
});

app.listen(3000);
