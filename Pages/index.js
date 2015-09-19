//index.js - Tom Peregrine: 19/09/2015
var marked = require('marked');
var jQuery = require('./jquery-1.11.3.min.js');
var input = null;
var preview = null;

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true
});

function OnLoad() {
	preview = document.getElementById('preview');
	input = document.getElementById('input');
}

jQuery(document).ready(function (event) {
	jQuery("#input").keyup(function(event) {
		jQuery("#input").css('min-height',jQuery("#preview").css('height'));	
	});
});

function update_preview () {
	var ih = marked(input.value);
	//console.log(input.value);
	preview.innerHTML = ih;

	input.height = preview.height;
}

window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;

	if (e.ctrlKey && e.shiftKey && key == 79) {
		var remote = require('remote');

		remote.getCurrentWindow().openDevTools();;
	}
}