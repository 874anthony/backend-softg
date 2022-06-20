import { Schema } from 'mongoose';

export interface IDriver extends Schema {
  firstName: string;
  lastName: string;
  ssn: string | number;
  dob: string | Date;
  address: string;
  city: string;
  zip: string | number;
  phone: string | number;
  active: boolean;
  createdAt?: Date;
}
