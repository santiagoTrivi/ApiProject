import { object, z } from "zod";





export const UserInputSchema = object({
    body: object({
        name: z.string({
            required_error: 'the name is required'
        }).nonempty(),
        email: z.string({
            required_error: 'the email is required'
        }).email('invalid email'),
        password: z.string({
            required_error: 'the password is required'
        }),
        passwordConfimation: z.string({
            required_error: 'confirmation required'
        })
    }).refine((data) => data.password === data.passwordConfimation, {
        message: 'passwords do not match. try again',
        path: ['passwordConfimation']
    })
})

export const UserUuidinput = object({
    params: object({
        uuid: z.string({
            required_error: 'uuid required'
        })
    })
})


export type UserInputData = z.TypeOf<typeof UserInputSchema>['body'];
export type UserUuid = z.TypeOf<typeof UserUuidinput>['params'];