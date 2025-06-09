import { Request, Response, NextFunction } from 'express';
import Stripe from 'stripe';
import { IProductLineItem } from '../types/product';

export const createCheckoutSession = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
    const stripe = new Stripe(STRIPE_SECRET_KEY);
    const frontendUrl = process.env.FRONTEND_URL || '';

    const line_items = req.body.line_items;

    const stripeLineItems = line_items.map((item: IProductLineItem) => ({
      price_data: {
        currency: 'cad',
        product_data: {
          name: item.productName,
        },
        unit_amount: item.unitAmount * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: stripeLineItems,
      mode: 'payment',
      success_url: `${frontendUrl}/payment/success`,
      cancel_url: `${frontendUrl}/payment/cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    next(error);
  }
};
