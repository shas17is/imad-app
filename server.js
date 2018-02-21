var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
title:'first',
heading:'article-one',
date:'21 feb',
content:
`
<p>	this is the content
	replace this what u want to display
	this is the content for article - one
</p>`	
};


function createtemplate(data) {
    var title=data.title;   
    var heading=data.heading;   
    var date=data.date;   
    var content=data.content;   

var htmltemplate =
`
<html>
	<head>
	<title>
	${title}
	</title>
	<meta name="viewport" content="width=device-width,initial-scaled=1" />
	<link href="/ui/style.css" rel="stylesheet" />
	</head>
	<body>
		<div class="container">
    		<div>
    			<div>
    			<a href="/"> Home </a>
    			</div>
    		</div>
            	<h3> 
            	    ${heading}
            	</h3>
            	<div>
            	    ${date}
            	</div>
            	<div>
            	    ${content}
            	</div>
        </div>	
	</body>
</html>
	`;
return  htmltemplate;	
}

	 
	

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleone));
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
