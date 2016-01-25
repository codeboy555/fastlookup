var Datastore = require('nedb');
var db = new Datastore({ filename: __dirname + '/db.js', autoload: true });

var chem = require("./chem").data;


chem.forEach( e => {
  "use strict";
  db.insert(e);
});

console.log("done")
