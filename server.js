var express = require("express");
var app = express();
var port = process.env.PORT || 4000;

// CORS support
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);


app.get("/getenv", function (request, response) {
    data = { "environment": process.env.ENVIRONMENT };
    response.json(data);
});


console.log("port="+port);
console.log("environment="+process.env.ENVIRONMENT);

app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
