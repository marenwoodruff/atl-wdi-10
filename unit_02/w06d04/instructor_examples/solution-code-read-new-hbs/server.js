/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var data        = require('./data.js');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/

// log
app.use( logger('dev'));
// app.use(express.static(__dirname + '/public'))

/*Views*/
app.set('view engine', 'hbs');



/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

/* INDEX TODOS */
app.get('/todos', function(req,res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});

/* NEW TODO */
app.get('/todos/new', function(req, res){
  res.render('todos/new');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date())
});