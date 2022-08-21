"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const common_1 = require("@jaypeeblogs/common");
const sign_in_1 = require("../controllers/sign-in");
const signInRouter = (0, express_1.Router)();
signInRouter
    .post('/signin', [(0, express_validator_1.body)('email').isEmail().withMessage('email not valid'),
    (0, express_validator_1.body)('password').isString().isLength({ max: 10, min: 6 })
        .withMessage('password should be a string greater than 6 characters but less than 10 characters'),
    common_1.requestValidation, sign_in_1.signIn]);
exports.default = signInRouter;
