var express = require("express");
var app = express();

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

var port = 4000;
app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
