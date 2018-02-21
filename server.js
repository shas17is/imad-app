var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

function createtemplate(data) {
var htmltemplate =
`
<html>
	<head>
	<meta name="viewport" content="width=device-width,initial-scaled=1" />
	<link href="path" rel=""stylesheet" />
	</head>
	<body>
		<div class=container>
			<div>
			<a href="/"> Home </a>
			</div>
		</div>
        	<h3> 
        	     $heading
        	</h3>
        	<div>
        	    $date
        	</div>
        	<div>
        	    $content
        	</div>
	</body>
</html>
	};
return  htmltemplate;	

var article-one = {
title="title one"
heading="article-one"
date="21 feb"
content="
	this is the content
	replace this what u want to display
	this is the content for article - one
	"
};
	 
	

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/article-one', function (req, res) {
  res.send(createtemplate(article-one);
});
app.get('/ui/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/ui/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
