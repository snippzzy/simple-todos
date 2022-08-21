"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const common_1 = require("@jaypeeblogs/common");
const updateTodo_1 = require("../controllers/updateTodo");
const updateTodoRouter = (0, express_1.Router)();
updateTodoRouter
    .put('/todos', common_1.currentUser, common_1.RequireAuth, (0, express_validator_1.query)('todoId')
    .custom((val) => mongoose_1.default.Types.ObjectId.isValid(val))
    .withMessage('todoId must be a valid mongodb objectId'), (0, express_validator_1.query)('status')
    .not()
    .isEmpty()
    .isString()
    .withMessage('status is not a valid string'), common_1.requestValidation, updateTodo_1.updateTodo);
exports.default = updateTodoRouter;
