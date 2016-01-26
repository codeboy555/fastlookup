var Datastore = require('nedb');
var db = new Datastore({filename: __dirname + '/db.js', autoload: true});

var _ = require("lodash");

var LIMIT = 1000;

function find(str, cb) {
    console.log("received query", str);
    var r = new RegExp(str, "i");
    db.find({$or: [{name: r}, {cas_no: r}]}, (err, res) => {
        if (res.length > LIMIT) {
            cb({records: res.slice(0, LIMIT), truncated: true, count: res.length})
        } else {
            cb({records: res, count: res.length});
        }
    });
}

module.exports = find;
