var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello/:firstName', function (req,res){
  var entryId = req.params.firstName;

  res.send('Hello ' + entryId + '!');
  
});

/* app.get('/op/:operation/:number1/:number2', function (req,res){
  
  var result;
  
  if (req.params.operation === 'add'){
    result = Number(req.params.number1) + Number(req.params.number2);
  } else if (req.params.operation === 'sub'){
    result = Number(req.params.number1) - Number(req.params.number2);
  } else if (req.params.operation === 'mult'){
    result = Number(req.params.number1) * Number(req.params.number2); 
  } else if (req.params.operation === 'div'){
    result = Number(req.params.number1) / Number(req.params.number2);
  } else {
    res.sendStatus(403);
  }

  var obj = {
    operator: req.params.operation,
    firstOperand: req.params.number1,
    secondOperand: req.params.number2,
    solution: result
  };

  res.json(obj);
  
}); */


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
