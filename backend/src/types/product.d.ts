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
