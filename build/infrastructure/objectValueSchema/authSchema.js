"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInputSchema = void 0;
const zod_1 = require("zod");
exports.AuthInputSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: zod_1.z.string({
            required_error: 'the email is required'
        }).email('invalid email'),
        password: zod_1.z.string({
            required_error: 'the password is required'
        })
    })
});
