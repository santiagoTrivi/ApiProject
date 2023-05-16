"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInputValidation = void 0;
const zod_1 = require("zod");
const userInputValidation = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json(error.issues.map((issue) => ({ message: issue.message })));
        }
        return res.status(500).json({ message: 'server error' });
    }
};
exports.userInputValidation = userInputValidation;
