export interface Hasher{
    hashPasword(password: string): string;
    verifyPassword(inputPassword: string, hashpassword: string): Promise<boolean>;
}


    