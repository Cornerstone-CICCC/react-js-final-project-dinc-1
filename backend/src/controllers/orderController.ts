import { Request, Response, NextFunction } from 'express';
import Order from '../models/orderModel';

export const getOrderByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.params.id;

  try {
    const order = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};