var request = require("request"),
    Algorithmia = require("algorithmia");

module.exports.compile = function (req, res, next) {
    try {
        var program = {
            script: req.body.code,
            language: req.body.lang,
            versionIndex: "2",
            clientId: "b623e706dc83f697559d7707ddb565c0",
            clientSecret: "1ac634d9b5c0ae7db8b008afe48a39221bfa4f3fee68c8b1ba482037317fe0ce"
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
                res.status(response.statusCode).json({
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
        // console.log(req.body.code);
        Algorithmia.client("simTZ6h74qFs2ki2vqbiPRPpuay1")
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