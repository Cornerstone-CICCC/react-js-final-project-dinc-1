import mongoose, { Schema } from 'mongoose';
import { IProduct } from '../types/product';

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICart extends mongoose.Document {
  id: string;
  userId: Schema.Types.ObjectId;
  status: 'active' | 'converted' | 'abandoned';
  items: ICartItem[];
  createdAt: Date;
  updatedAt: Date;
}
