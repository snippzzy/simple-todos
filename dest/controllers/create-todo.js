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
exports.createTodo = void 0;
const user_1 = __importDefault(require("../models/user"));
const todo_1 = __importDefault(require("../models/todo"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { item } = req.body;
    const author = yield user_1.default.findOne({ email: req.currentUser.email });
    const todo = todo_1.default.build({
        item: item,
        author: author.name
    });
    yield todo.save();
    res.status(201).send(todo);
});
exports.createTodo = createTodo;
