var db = require("./chem").data;
var _ = require("lodash");
var LIMIT = 1000;

function find(str) {
    var search_regex = new RegExp(str, "i");
    var res = _.filter(db, e=> {
        var data = e.cas_no + " - " + e.name
        return data.match(search_regex);
    });
    if (res.length > LIMIT) {
        return {records: res.slice(0, LIMIT), truncated: true, count: res.length}
    } else {
        return {records: res, count: res.length}
    }
}

module.exports = find;
