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