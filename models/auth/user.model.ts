import CryptoJS from 'crypto-js';
import { Schema, model } from 'mongoose';
import validator from 'validator';

// Types
import { IUser } from './types';

const UserSchema: Schema<IUser> = new Schema({
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
      validator: (value: string) => validator.isEmail(value),
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
UserSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await CryptoJS.AES.encrypt(this.password!, process.env.PASSWORD_PHARAPRHASE!).toString();

  next();
});

// ================================================== STATICS METHODS STARTS HERE ==========================================
/**
 *
 * @param hashedPassword
 * @returns Decrypt hashed password
 */
UserSchema.methods.decryptPassword = async function (hashedPassword: string) {
  const passwordDecrypted = await CryptoJS.AES.decrypt(
    hashedPassword,
    process.env.PASSWORD_PHARAPRHASE!
  ).toString(CryptoJS.enc.Utf8);

  return passwordDecrypted;
};

export default model<IUser>('user', UserSchema);
