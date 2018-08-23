var express = require("express");
var app = express();
var port = process.env.PORT || 4000;
var env = process.env.ENVIRONMENT;

// CORS support
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);

app.get("/", function (request, response) {
    data = { "welcome": "to the test app" };
    response.json(data);
});

app.get("/getenv", function (request, response) {
    data = { "environment": env };
    response.json(data);
});


console.log("port="+port);
console.log("environment="+env);

app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
