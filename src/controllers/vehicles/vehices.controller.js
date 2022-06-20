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
exports.deleteVehicle = exports.updateVehicle = exports.getVehicle = exports.createVehicle = exports.getAllVehicles = void 0;
// Model
const vehicles_model_1 = __importDefault(require("@models/vehicles/vehicles.model"));
// General controller
const factory = __importStar(require("@controllers/factory.controller"));
const getAllVehicles = factory.findAll(vehicles_model_1.default);
exports.getAllVehicles = getAllVehicles;
const createVehicle = factory.createOne(vehicles_model_1.default);
exports.createVehicle = createVehicle;
// Routes that requires id on the params
const getVehicle = factory.findOne(vehicles_model_1.default);
exports.getVehicle = getVehicle;
const updateVehicle = factory.updateOne(vehicles_model_1.default);
exports.updateVehicle = updateVehicle;
const deleteVehicle = factory.deleteOne(vehicles_model_1.default);
exports.deleteVehicle = deleteVehicle;
