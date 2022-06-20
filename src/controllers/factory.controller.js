"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.findOne = exports.createOne = exports.findAll = void 0;
// Importing the global handler error and the catchAsync
const httpException_1 = __importDefault(require("@utils/httpException"));
const catchAsync_1 = __importDefault(require("@utils/catchAsync"));
const apiFeatures_1 = __importDefault(require("@utils/apiFeatures"));
const createOne = (Model) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return next(new httpException_1.default('Hacen faltan campos para la creación del registro', 404));
    }
    const document = yield Model.create(body);
    if (!document) {
        return next(new httpException_1.default('No se pudo crear el registro, inténtelo nuevamente', 400));
    }
    return res.status(201).json({
        status: true,
        message: `Se creó el registro exitosamente!`,
        document,
    });
}));
exports.createOne = createOne;
const findAll = (Model) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const features = new apiFeatures_1.default(Model.find(), req.query).filter().sort().limitFields().paginate();
    const documents = yield features.query;
    if (documents.length === 0) {
        return next(new httpException_1.default('No hay registros con ese criterio de búsqueda!', 204));
    }
    return res.status(200).json({
        status: true,
        documents,
    });
}));
exports.findAll = findAll;
const findOne = (Model, populateOptions) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let query = Model.findById(id);
    if (populateOptions)
        query = query.populate(populateOptions);
    const document = yield query;
    if (!document) {
        return next(new httpException_1.default('No hay un registro con este ID', 404));
    }
    return res.status(200).json({
        status: true,
        document,
    });
}));
exports.findOne = findOne;
const updateOne = (Model) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const body = req.body;
    const documentUpdated = yield Model.findByIdAndUpdate(id, body, {
        new: true,
        validateBeforeSave: false,
    });
    if (!documentUpdated)
        return next(new httpException_1.default('No se ha podido actualizar el registro, intentelo nuevamente!', 500));
    res.status(200).json({
        status: true,
        message: 'El registro fue actualizado con exito',
        documentUpdated,
    });
}));
exports.updateOne = updateOne;
const deleteOne = (Model) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deletedDocument = yield Model.findByIdAndRemove(id);
    if (!deletedDocument)
        return next(new httpException_1.default('No se ha podido eliminar el registro, intentelo nuevamente!', 500));
    res.status(204).json({
        status: true,
        message: 'El registro fue actualizado con exito',
        deletedDocument,
    });
}));
exports.deleteOne = deleteOne;
