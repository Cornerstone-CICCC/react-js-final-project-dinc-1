import { Request, Response, NextFunction } from 'express';
import Cart from '../models/cartModel';

export const getCarts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await Cart.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getCartByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

export const createCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { userId, items } = req.body;
    const newCart = new Cart({
      userId,
      items,
      status: 'active',
    });
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    next(error);
  }
};

export const updateCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const { items, status } = req.body;
    const updatedCart = await Cart.findOneAndUpdate(
      {
        userId,
      },
      { items, status, updatedAt: new Date() },
      { new: true },
    );
    if (!updatedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(updatedCart);
  } catch (error) {
    next(error);
  }
};

export const deleteCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const deletedCart = await Cart.findOneAndDelete({ userId });
    if (!deletedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json({ message: 'Cart deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const convertCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const updatedCart = await Cart.findOneAndUpdate(
      { userId, status: 'active' },
      { status: 'converted', updatedAt: new Date() },
      { new: true },
    );
    if (!updatedCart) {
      return res
        .status(404)
        .json({ message: 'Cart not found or already converted' });
    }
    res.json(updatedCart);
  } catch (error) {
    next(error);
  }
};

export const abandonCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const updatedCart = await Cart.findOneAndUpdate(
      { userId, status: 'active' },
      { status: 'abandoned', updatedAt: new Date() },
      { new: true },
    );
    if (!updatedCart) {
      return res
        .status(404)
        .json({ message: 'Cart not found or already abandoned' });
    }
    res.json(updatedCart);
  } catch (error) {
    next(error);
  }
};

export const clearCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const updatedCart = await Cart.findOneAndUpdate(
      { userId, status: 'active' },
      { items: [], updatedAt: new Date() },
      { new: true },
    );
    if (!updatedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(updatedCart);
  } catch (error) {
    next(error);
  }
};

export const addItemToCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    const itemIndex = cart.items.findIndex(
      (item) => item.id.toString() === productId,
    );
    if (itemIndex > -1) {
      // If item already exists, update the quantity
      cart.items[itemIndex].quantity += quantity;
    } else {
      // If item does not exist, add it to the cart
      // cart.items.push({ productId, quantity });
    }
    cart.updatedAt = new Date();
    await cart.save();
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

export const removeItemFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const { productId } = req.body;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    cart.items = cart.items.filter((item) => item.id.toString() !== productId);
    cart.updatedAt = new Date();
    await cart.save();
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

export const getCartSummary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.userId;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0,
    );
    res.json({
      totalItems,
      totalPrice,
      items: cart.items,
      status: cart.status,
      updatedAt: cart.updatedAt,
    });
  } catch (error) {
    next(error);
  }
};
