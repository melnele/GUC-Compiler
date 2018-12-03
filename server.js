var express = require('express'),
    logger = require('morgan'),
    helmet = require('helmet'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    routes = require('./api/routes'),
    app = express();

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use('/api', routes);

// 500 internal server error handler
app.use(function (err, req, res, next) {
    if (err.statusCode === 404) return next();
    res.status(500).json({
        // Never leak the stack trace of the err if running in production mode
        err: process.env.NODE_ENV === 'production' ? null : err,
        msg: '500 Internal Server Error',
        data: null
    });
});

// 404 error handler
app.use(function (req, res) {
    res.status(404).json({
        err: null,
        msg: '404 Not Found',
        data: null
    });
});