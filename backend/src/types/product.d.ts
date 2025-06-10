import mongoose from 'mongoose';

export interface IProduct extends mongoose.Document {
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
