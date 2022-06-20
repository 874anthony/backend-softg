// Import 3rd-party packages
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Importing our utils to this controller
import HttpException from '@utils/httpException';
import catchAsync from '@utils/catchAsync';

// Importing the model
import User from '@models/auth/user.model';
import { CreateUserDTO } from '@models/auth/types';

const signToken = (id: any) => {
  return jwt.sign({ id }, process.env.JWT_PRIVATE_KEY as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  // Extract the body based on the DTO
  const { name, email, password } = req.body as CreateUserDTO;

  // Create the user
  const newUser = await User.create({ name, email, password });
  const token = signToken(newUser._id);

  // Hide password from the output
  newUser.password = undefined;

  res.status(200).json({
    status: true,
    message: `El usuario con el rol: Admin fue creado con exito`,
    token,
    user: newUser,
  });
});

const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new HttpException('Por favor ingresa el email y la contraseña!', 400));
  }

  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password');

  if (!user || !((await user.decryptPassword(user.password!)) === password)) {
    return next(new HttpException('Email o contraseña incorrectos!', 401));
  }

  if (!user.active) {
    return next(new HttpException('Este usuario está inactivo. Contactar administrador', 401));
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
});

export { createUser, login };
