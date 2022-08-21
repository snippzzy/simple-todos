"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const common_1 = require("@jaypeeblogs/common");
const create_todo_1 = require("../controllers/create-todo");
const createTodoRouter = (0, express_1.Router)();
createTodoRouter
    .post('/todos', common_1.currentUser, common_1.RequireAuth, (0, express_validator_1.body)('item').
    isString().
    withMessage('must be defined'), common_1.requestValidation, create_todo_1.createTodo);
exports.default = createTodoRouter;
