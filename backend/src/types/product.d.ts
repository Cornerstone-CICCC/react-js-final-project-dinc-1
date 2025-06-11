import mongoose from 'mongoose';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductLineItem {
  productName: string;
  unitAmount: number;
  quantity: number;
  imageUrl: string;
}

export interface IOrder extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  lineItems: IProductLineItem[];
}
