"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const common_1 = require("@jaypeeblogs/common");
const getAllTodos_1 = require("../controllers/getAllTodos");
const getAllTodosRouter = (0, express_1.Router)();
getAllTodosRouter
    .get('/todos', common_1.currentUser, common_1.RequireAuth, getAllTodos_1.getAllTodos);
exports.default = getAllTodosRouter;
