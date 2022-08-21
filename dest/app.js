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
require("express-async-errors");
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const common_1 = require("@jaypeeblogs/common");
const sign_up_1 = __importDefault(require("./routes/sign-up"));
const sign_in_1 = __importDefault(require("./routes/sign-in"));
const sign_out_1 = __importDefault(require("./routes/sign-out"));
const create_todo_1 = __importDefault(require("./routes/create-todo"));
const getAllTodo_1 = __importDefault(require("./routes/getAllTodo"));
const getOne_todo_1 = __importDefault(require("./routes/getOne-todo"));
const updateTodo_1 = __importDefault(require("./routes/updateTodo"));
const deleteTodo_1 = __importDefault(require("./routes/deleteTodo"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use((0, cookie_session_1.default)({
    secure: false,
    signed: false
}));
app.use('/api/users', sign_up_1.default);
app.use('/api/users', sign_in_1.default);
app.use('/api/users', sign_out_1.default);
app.use('/api', create_todo_1.default);
app.use('/api', getAllTodo_1.default);
app.use('/api/todos', getOne_todo_1.default);
app.use('/api/todos', deleteTodo_1.default);
app.use('/api', updateTodo_1.default);
app.all('*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    throw new common_1.NotFoundError('endpoint not found');
}));
app.use(common_1.errorHandler);
exports.default = app;
