module.exports.compile = function(req, res, next) {
  try {
    res.status(200).json({
      err: null,
      msg: "OK",
      data: null
    });
  } catch (err) {
    console.error(err);
  }
};
var request = require("request");

var program = {
  script: "int x = 5;",
  language: "java",
  versionIndex: "0",
  clientId: "b623e706dc83f697559d7707ddb565c0",
  clientSecret:
    "1ac634d9b5c0ae7db8b008afe48a39221bfa4f3fee68c8b1ba482037317fe0ce"
};
request(
  {
    url: "https://api.jdoodle.com/execute",
    method: "POST",
    json: program
  },
  function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);
  }
);
