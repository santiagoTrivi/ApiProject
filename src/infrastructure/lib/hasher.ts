import { string } from "zod";

import bcrypt from "bcryptjs";
import { Hasher } from "../../core/common/hasherObjectInterface";

export default class PasswordCipher implements Hasher{

    hashPasword(password: string): string {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash
    }
    
    verifyPassword(inputPassword: string, hashpassword: string): Promise<boolean> {
        return bcrypt.compare(inputPassword, hashpassword)
    }
    
    
}