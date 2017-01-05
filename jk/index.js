import sub from './sub';
import './main.scss';
var app  = document.createElement('div');
app.innerHTML = '<h1 class="hello">Hello index</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('<p>look at me! Now is ' + moment().format() + '</p>');