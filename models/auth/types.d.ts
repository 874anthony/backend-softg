import { Schema } from 'mongoose';

export interface IUser extends Schema {
  name: string;
  role?: UserRoles;
  email: string;
  password: string | undefined;
  active: boolean;
  createdAt: any;
  decryptPassword: (hashedPassword: string) => string;
}

enum UserRoles {
  Admin = 'Admin',
}

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string | undefined;
}
