import mongoose, { Schema, model } from 'mongoose';
import { IOrder } from '../types/product';

const OrderSchema = new Schema<IOrder>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lineItems: [{ type: Schema.Types.Mixed, required: true }],
  },
  { timestamps: true }
);

const Order = model<IOrder>('Order', OrderSchema);

export default Order;
export { OrderSchema };