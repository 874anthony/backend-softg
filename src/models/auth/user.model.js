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
const crypto_js_1 = __importDefault(require("crypto-js"));
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [50, 'El nombre debe tener como máximo 50 caracteres'],
    },
    role: {
        type: String,
        enum: ['Admin'],
        default: 'Admin',
    },
    email: {
        type: String,
        validate: {
            validator: (value) => validator_1.default.isEmail(value),
            message: 'El email ingresado no es válido',
        },
        required: [true, 'El email es requerido'],
        minlength: [3, 'El email debe tener al menos 3 caracteres'],
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        select: false,
        required: [true, 'La contraseña es requerida'],
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
// ============================================= DOCUMENT MIDDLEWARE STARTS HERE==============================================
// To hash the password everytime it changes
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Only run this function if password was actually modified
        if (!this.isModified('password'))
            return next();
        // Hash the password with cost of 12
        this.password = yield crypto_js_1.default.AES.encrypt(this.password, process.env.PASSWORD_PHARAPRHASE).toString();
        next();
    });
});
// ================================================== STATICS METHODS STARTS HERE ==========================================
/**
 *
 * @param hashedPassword
 * @returns Decrypt hashed password
 */
UserSchema.methods.decryptPassword = function (hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const passwordDecrypted = yield crypto_js_1.default.AES.decrypt(hashedPassword, process.env.PASSWORD_PHARAPRHASE).toString(crypto_js_1.default.enc.Utf8);
        return passwordDecrypted;
    });
};
exports.default = (0, mongoose_1.model)('user', UserSchema);
