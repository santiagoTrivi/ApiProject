import { object, z } from "zod";




export const AuthInputSchema = object({
    body: object({
        email: z.string({
            required_error: 'the email is required'
        }).email('invalid email'),
        password: z.string({
            required_error: 'the password is required'
        })
    })
});


export type AuthInputData = z.TypeOf<typeof AuthInputSchema>['body'];