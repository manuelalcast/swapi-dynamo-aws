const ApiError = require('./ApiError');

function apiErrorHandler(err, req, res, next) {

    if (err instanceof ApiError) {
        res.status(err.code).json({ message : err.message , stack : err.stack , error : err });
        return;
    }

    res.status(500).json({ message : 'something went wrong'});
}

module.exports = apiErrorHandler;
