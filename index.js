var express = require('express');
var app = express();

app.get('/entry/:entryId', function (req, res) {
  
  var entries = {
    1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
      ]
    }, 
    2: {
    firstName: "Mary",
    lastName: "Poppins",
    emails: [
      {type: "home", address: "mary@poppins.com"},
      {type: "work", address: "mpoppins@megacorp.com"}
      ]
    }
  };
  
  var userInput = entries[req.params.entryId];
  
    if (userInput){
      res.json(userInput);
    } else {
      res.sendStatus(404);
    }
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
