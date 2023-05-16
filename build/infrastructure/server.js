"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoConnection_1 = __importDefault(require("./database/mongoConnection"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const errorHandle_1 = require("./middlewares/errorHandle");
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.dataBaseConnection();
        this.middlewares();
        this.routes();
    }
    dataBaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, mongoConnection_1.default)();
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
    }
    routes() {
        this.app.use(userRoute_1.default);
        this.app.use(errorHandle_1.errorHanddler);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running at http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
;
