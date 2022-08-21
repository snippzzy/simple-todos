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
const mongoose_1 = __importDefault(require("mongoose"));
const common_1 = require("@jaypeeblogs/common");
const app_1 = __importDefault(require("./app"));
const start = (port) => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.JWT) {
        throw new common_1.StartUpError('JWT expression env variable not set');
    }
    if (!process.env.MongoUrl) {
        throw new common_1.StartUpError('Mongodb Database Error is not set');
    }
    try {
        yield mongoose_1.default.connect(process.env.MongoUrl);
        console.log('connection to database established');
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    const PORT = process.env.PORT || port;
    app_1.default.listen(PORT, () => {
        console.log(`server listening on port: ${PORT}`);
    });
});
start(4000);
