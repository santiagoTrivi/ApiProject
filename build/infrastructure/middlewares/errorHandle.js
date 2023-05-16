"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHanddler = void 0;
const http_errors_1 = require("http-errors");
const errorHanddler = (err, req, res, next) => {
    if (err instanceof http_errors_1.HttpError) {
        return res.status(err.statusCode).json({
            errorMessage: err.message
        });
    }
    console.log(err);
    res.status(500).json({
        errorMessage: 'internal error server'
    });
};
exports.errorHanddler = errorHanddler;
