"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUuidinput = exports.UserInputSchema = void 0;
const zod_1 = require("zod");
exports.UserInputSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: zod_1.z.string({
            required_error: 'the name is required'
        }).nonempty(),
        email: zod_1.z.string({
            required_error: 'the email is required'
        }).email('invalid email'),
        password: zod_1.z.string({
            required_error: 'the password is required'
        }),
        passwordConfimation: zod_1.z.string({
            required_error: 'confirmation required'
        })
    }).refine((data) => data.password === data.passwordConfimation, {
        message: 'passwords do not match. try again',
        path: ['passwordConfimation']
    })
});
exports.UserUuidinput = (0, zod_1.object)({
    params: (0, zod_1.object)({
        uuid: zod_1.z.string({
            required_error: 'uuid required'
        })
    })
});
