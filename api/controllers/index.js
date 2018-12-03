    	var Algorithmia = require("algorithmia");

module.exports.compile = function (req, res, next) {
    try {
        res.status(200).json({
            err: null,
            msg: 'OK',
            data: null
        });
    } catch (err) {
        console.error(err);
    }
};


module.exports.detect = function (req, res, next) {
    try {
    	console.log(req.body);
Algorithmia.client("simTZ6h74qFs2ki2vqbiPRPpuay1")
    .algo("PetiteProgrammer/ProgrammingLanguageIdentification/0.1.3")
    .pipe(req.body)
    .then(function(response) {
    	res.status(200).json({
            err: null,
            msg: 'OK',
            data: null
        });
        console.log(response.get());
    });
    } catch (err) {
        console.error(err);
    }
};