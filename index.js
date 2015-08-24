var app = module.exports = require('express')();
var memwatch = require('memwatch-next');

// Settings
app.use(require('browserify-dev-middleware')({ src: __dirname }));
app.set('views', __dirname);
app.set('view engine', 'jade');

// Routes
app.get('/memory', function(req, res, next) {
  res.send(process.memoryUsage());
});
app.get('/', function (req, res, next) {
  res.render('index', { base: req.baseUrl });
});
