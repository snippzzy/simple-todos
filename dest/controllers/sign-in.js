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
exports.signIn = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const common_1 = require("@jaypeeblogs/common");
const user_1 = __importDefault(require("../models/user"));
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const existingUser = yield user_1.default.findOne({ email });
    if (!existingUser) {
        throw new common_1.NotFoundError('account not found');
    }
    const validUser = yield bcrypt_1.default.compare(password, existingUser.password);
    if (!validUser) {
        throw new common_1.BadRequestError('invalid credential');
    }
    const token = jsonwebtoken_1.default.sign({ id: existingUser.id, email: existingUser.email }, process.env.JWT);
    req.session = { token: token };
    res.send(existingUser);
});
exports.signIn = signIn;
