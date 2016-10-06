var path = require('path');

var express = require('express');
var compression = require('compression');

var shins = require('shins/index.js');
var shinsDir = shins.srcDir();
var widdershins = require('widdershins');

var fetch = require('./fetch.js');

var app = express();
app.use(compression());

app.get('/', function(req,res) { res.sendFile(path.join(__dirname,'index.html')) });
app.get('/markdown', function(req,res) {
  fetch.get(req.query.url,{},{},function(err,resp,obj){
    if (obj) {
	  //console.log(obj);
      res.send(shins.render(obj));
    }
    else {
      res.status(500);
      res.end();
    }
  });
});
app.get('/json', function(req,res) {
  fetch.get(req.query.url,{},{},function(err,resp,obj){
    if (obj) {
	  //console.log(obj);
	  obj = widdershins.convert(JSON.parse(obj),req.query.url);
      shins.render(obj,function(err,str){
	    //console.log(str);
		//console.log(err);
	    res.send(str);
	  });
    }
    else {
      res.status(500);
      res.end();
    }
  });
});
app.use("/",  express.static(shinsDir));

var myport = process.env.PORT || 5678;
if (process.argv.length>2) myport = process.argv[2];

var server = app.listen(myport, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Arapaho server listening at http://%s:%s', host, port);
});
