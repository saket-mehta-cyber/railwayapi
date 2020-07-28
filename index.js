var express=require("express");
var app= express();
var request = require("request");

app.get("/",function(req,res){
	res.render("home.ejs")
})

app.get("/results",function(req,res){
	var query = req.query.search;
	
	
var options = {
   method: 'POST',
  url: 'https://trains.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'trains.p.rapidapi.com',
    'x-rapidapi-key': '867ca3d697msh2bc10a65eb11865p129544jsne50f08ae3bb6',
    'content-type': 'application/json',
    accept: 'application/json',
    useQueryString: true
  },
  body: {search: query},
  json: true
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	  var data=(body);
	  // res.send(data);
      res.render("results.ejs",{data:data});
});
	
	
	
	
})







app.listen(3000,function(){
	console.log("Railway app started");
})