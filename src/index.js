var page = require('page');

var main = document.getElementById('main-container');
//Asignando rutas
page('/', function(ctx, next){
  main.innerHTML = 'Home <a href="/signup">signup</a> ';
})

page('/signup', function(ctx, next){
  main.innerHTML = 'signup <a href="/signup">home</a>';
})

page();