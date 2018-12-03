var request = require("request"),
    Algorithmia = require("algorithmia");

module.exports.compile = function (req, res, next) {
    try {
        var program = {
            script: req.body.code,
            language: req.body.lang,
            stdin: req.body.stdin,
            versionIndex: "2",
            clientId: process.env.jdoodleClientId,
            clientSecret: process.env.jdoodleClientSecret
        };
        request(
            {
                url: "https://api.jdoodle.com/execute",
                method: "POST",
                json: program
            },
            function (error, response, body) {
                console.log("error:", error);
                console.log("statusCode:", response && response.statusCode);
                console.log("body:", body);
                res.status(200).json({
                    err: error,
                    msg: response.msg,
                    data: body
                });
            }
        );
    } catch (err) {
        console.error(err);
    }
};

module.exports.detect = function (req, res, next) {
    try {
        Algorithmia.client(process.env.algorithmiaAPIKey)
            .algo("PetiteProgrammer/ProgrammingLanguageIdentification/0.1.3")
            .pipe(req.body.code)
            .then(function (response) {
                res.status(200).json({
                    err: null,
                    msg: 'OK',
                    data: response.get()[0][0]
                });
                console.log(response.get());
            });
    } catch (err) {
        console.error(err);
    }
};