"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const common_1 = require("@jaypeeblogs/common");
const getOne_todo_1 = require("../controllers/getOne-todo");
const getOneTodoRouter = (0, express_1.Router)();
getOneTodoRouter
    .get('/:todoId', common_1.currentUser, common_1.RequireAuth, (0, express_validator_1.param)('todoId')
    .custom((val) => mongoose_1.default.Types.ObjectId.isValid(val))
    .withMessage('todoId must be a valid mongodb objectId'), common_1.requestValidation, getOne_todo_1.getOneTodo);
exports.default = getOneTodoRouter;
