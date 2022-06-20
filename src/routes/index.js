"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Routes of the application
const drivers_routes_1 = __importDefault(require("@routes/drivers/drivers.routes"));
const vehicles_routes_1 = __importDefault(require("@routes/vehicles/vehicles.routes"));
const route_routes_1 = __importDefault(require("@routes/route/route.routes"));
const scheduler_routes_1 = __importDefault(require("@routes/schedulers/scheduler.routes"));
const auth_routes_1 = __importDefault(require("@routes/auth/auth.routes"));
const router = (0, express_1.Router)();
router.use('/drivers', drivers_routes_1.default);
router.use('/vehicles', vehicles_routes_1.default);
router.use('/routes', route_routes_1.default);
router.use('/schedulers', scheduler_routes_1.default);
router.use('/auth', auth_routes_1.default);
exports.default = router;
