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
exports.deleteScheduler = exports.updateScheduler = exports.getScheduler = exports.createScheduler = exports.getAllSchedulers = void 0;
// Model
const scheduler_model_1 = __importStar(require("@models/schedulers/scheduler.model"));
// General controller
const factory = __importStar(require("@controllers/factory.controller"));
const getAllSchedulers = factory.findAll(scheduler_model_1.default);
exports.getAllSchedulers = getAllSchedulers;
const createScheduler = factory.createOne(scheduler_model_1.default);
exports.createScheduler = createScheduler;
// Routes that requires id on the params
const getScheduler = factory.findOne(scheduler_model_1.default, scheduler_model_1.populateSchedulerOpts);
exports.getScheduler = getScheduler;
const updateScheduler = factory.updateOne(scheduler_model_1.default);
exports.updateScheduler = updateScheduler;
const deleteScheduler = factory.deleteOne(scheduler_model_1.default);
exports.deleteScheduler = deleteScheduler;
