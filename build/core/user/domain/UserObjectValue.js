"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = require("uuidv4");
class UserObjectValue {
    constructor(name, email, password, url, provider) {
        this.uuid = (0, uuidv4_1.uuid)();
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = true;
        this.photoUrl = url || undefined;
        this.provider = provider || undefined;
    }
}
exports.default = UserObjectValue;
