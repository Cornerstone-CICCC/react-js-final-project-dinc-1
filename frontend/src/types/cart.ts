import { User } from './user';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  seller: User;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
