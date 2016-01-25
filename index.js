var express = require('express');
var app = express();
var finder = require("./queryjson");


app.use('/s', express.static('.'));

app.get('/l', function (req, res) {
  finder(req.query.q, (result) => {
    res.send(JSON.stringify(result));
  })
});

app.listen(3000, function () {
  console.log('Started');
});
