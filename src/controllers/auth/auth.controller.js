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
exports.login = exports.createUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Importing our utils to this controller
const httpException_1 = __importDefault(require("@utils/httpException"));
const catchAsync_1 = __importDefault(require("@utils/catchAsync"));
// Importing the model
const user_model_1 = __importDefault(require("@models/auth/user.model"));
const signToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
const createUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract the body based on the DTO
    const { name, email, password } = req.body;
    // Create the user
    const newUser = yield user_model_1.default.create({ name, email, password });
    const token = signToken(newUser._id);
    // Hide password from the output
    newUser.password = undefined;
    res.status(200).json({
        status: true,
        message: `El usuario con el rol: Admin fue creado con exito`,
        token,
        user: newUser,
    });
}));
exports.createUser = createUser;
const login = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // 1) Check if email and password exist
    if (!email || !password) {
        return next(new httpException_1.default('Por favor ingresa el email y la contraseña!', 400));
    }
    // 2) Check if user exists && password is correct
    const user = yield user_model_1.default.findOne({ email }).select('+password');
    if (!user || !((yield user.decryptPassword(user.password)) === password)) {
        return next(new httpException_1.default('Email o contraseña incorrectos!', 401));
    }
    if (!user.active) {
        return next(new httpException_1.default('Este usuario está inactivo. Contactar administrador', 401));
    }
    // 3) If everything ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
        status: true,
        message: 'Te has conectado con éxito',
        id: user._id,
        roleType: user.role,
        token,
    });
}));
exports.login = login;
