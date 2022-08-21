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
exports.updateTodo = void 0;
const common_1 = require("@jaypeeblogs/common");
const todo_1 = __importDefault(require("../models/todo"));
const user_1 = __importDefault(require("../models/user"));
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { todoId, status } = req.query;
    const author = yield user_1.default.findOne({ email: req.currentUser.email });
    const todo = yield todo_1.default.findById({ _id: todoId });
    if (!todo) {
        throw new common_1.NotFoundError('todo not found');
    }
    if (todo.author !== author.name) {
        throw new common_1.NotAuthorisedError('forbidden, not authorised');
    }
    todo.set('status', status);
    yield todo.save();
    res.send(todo);
});
exports.updateTodo = updateTodo;
