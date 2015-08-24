var d3 = require('d3');
var c3 = require('c3');
var $ = require('jquery');
var points = [];

var chart = c3.generate({
    bindto: '#chart',
    data: { columns: [['data1'].concat(points)] }
});

setInterval(function() {
  $.ajax(location.href + '/memory').then(function(res) {
    points.push(res.heapUsed)
    chart.load({ columns: [['data1'].concat(points)] });
  });
}, 5000);