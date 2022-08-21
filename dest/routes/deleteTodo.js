"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const common_1 = require("@jaypeeblogs/common");
const deleteTodo_1 = require("../controllers/deleteTodo");
const deleteTodoRouter = (0, express_1.Router)();
deleteTodoRouter
    .delete('/:todoId', common_1.currentUser, common_1.RequireAuth, (0, express_validator_1.param)('todoId')
    .custom((val) => mongoose_1.default.Types.ObjectId.isValid(val))
    .withMessage('todoId must be a valid mongodb objectId'), common_1.requestValidation, deleteTodo_1.deleteTodo);
exports.default = deleteTodoRouter;
