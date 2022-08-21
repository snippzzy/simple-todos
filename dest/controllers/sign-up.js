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
exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const common_1 = require("@jaypeeblogs/common");
const user_1 = __importDefault(require("../models/user"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    const existingUser = yield user_1.default.findOne({ email: email });
    if (existingUser) {
        throw new common_1.BadRequestError('bad request user already exit');
    }
    const user = user_1.default.build({ email, name, password });
    yield user.save();
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT);
    req.session = { token: token };
    res.status(201).send(user);
});
exports.signUp = signUp;
