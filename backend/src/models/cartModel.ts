import { Schema, model, Document } from 'mongoose';
import { productSchema } from './productModel';
import { ICart } from '../types/cart';

const CartSchema = new Schema<ICart>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    items: [productSchema],
    status: {
      type: String,
      enum: ['active', 'converted', 'abandoned'],
      default: 'active',
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export default model<ICart>('Cart', CartSchema);
