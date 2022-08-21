"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const todoSchema = new mongoose_1.default.Schema({
    item: { type: String, required: true },
    status: { type: String, enum: ['done', 'cancelled', 'in-progress'], default: 'in-progress' },
    author: { type: String, required: true }
});
todoSchema.statics.build = (attr) => {
    return new Todo(attr);
};
const Todo = mongoose_1.default.model('Todo', todoSchema);
exports.default = Todo;
