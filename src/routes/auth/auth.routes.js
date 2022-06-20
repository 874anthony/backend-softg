"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Controller
const auth_controller_1 = require("@controllers/auth/auth.controller");
const router = (0, express_1.Router)();
router.route('/create-user').post(auth_controller_1.createUser);
router.route('/login').post(auth_controller_1.login);
exports.default = router;
