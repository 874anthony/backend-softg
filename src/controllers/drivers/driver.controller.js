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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriver = exports.updateDriver = exports.getDriver = exports.createDriver = exports.getAllDrivers = void 0;
// Model
const drivers_model_1 = __importDefault(require("@models/drivers/drivers.model"));
// General controller
const factory = __importStar(require("@controllers/factory.controller"));
const getAllDrivers = factory.findAll(drivers_model_1.default);
exports.getAllDrivers = getAllDrivers;
const createDriver = factory.createOne(drivers_model_1.default);
exports.createDriver = createDriver;
// Routes that requires id on the params
const getDriver = factory.findOne(drivers_model_1.default);
exports.getDriver = getDriver;
const updateDriver = factory.updateOne(drivers_model_1.default);
exports.updateDriver = updateDriver;
const deleteDriver = factory.deleteOne(drivers_model_1.default);
exports.deleteDriver = deleteDriver;
