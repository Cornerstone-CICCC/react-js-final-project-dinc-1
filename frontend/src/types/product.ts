import { User } from './user';

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrls: string[];
  status: string;
  categorySlug: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface LineItem {
  productName: string;
  unitAmount: number;
  quantity: number;
  imageUrl: string;
}

export interface Order {
  _id: string;
  userId: string;
  lineItems: LineItem[];
  createdAt: string;
}
