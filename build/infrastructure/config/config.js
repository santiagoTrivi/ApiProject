"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB = process.env.MONGODB || '';
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
exports.config = {
    mongo: {
        url: MONGODB
    },
    server: {
        port: PORT
    }
};
