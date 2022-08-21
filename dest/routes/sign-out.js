"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const common_1 = require("@jaypeeblogs/common");
const sign_out_1 = require("../controllers/sign-out");
const signOutRouter = (0, express_1.Router)();
signOutRouter
    .post('/signout', [common_1.currentUser, common_1.RequireAuth, sign_out_1.signOut]);
exports.default = signOutRouter;
