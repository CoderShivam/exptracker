const errorHandler = (err, req, res, next) => {
    console.error('Error Handler Caught:', err);
    console.error(err.stack);

    const statusCode = res.statusCode ? res.statusCode : (err.status || 500);
    res.status(statusCode).json({
        success: false,
        error: err.message || 'Server Error'
    });
};

module.exports = errorHandler;
