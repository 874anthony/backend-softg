"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoute = exports.updateRoute = exports.getRoute = exports.createRoute = exports.getAllRoutes = void 0;
// Model
const routes_model_1 = __importStar(require("@models/routes/routes.model"));
// General controller
const factory = __importStar(require("@controllers/factory.controller"));
const getAllRoutes = factory.findAll(routes_model_1.default);
exports.getAllRoutes = getAllRoutes;
const createRoute = factory.createOne(routes_model_1.default);
exports.createRoute = createRoute;
// Routes that requires id on the params
const getRoute = factory.findOne(routes_model_1.default, routes_model_1.populateRouteOptions);
exports.getRoute = getRoute;
const updateRoute = factory.updateOne(routes_model_1.default);
exports.updateRoute = updateRoute;
const deleteRoute = factory.deleteOne(routes_model_1.default);
exports.deleteRoute = deleteRoute;
