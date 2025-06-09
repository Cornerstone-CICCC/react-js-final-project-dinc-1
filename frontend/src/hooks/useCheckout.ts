'use client';

import { useState } from 'react';
import { LineItem } from '@/types/product';
import { loadStripe } from '@stripe/stripe-js';

export const useCheckout = () => {
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';

  const createCheckoutSession = async (lineItems: LineItem[]) => {
    setLoading(true);
    setCheckoutError("");

    try {
      const response = await fetch(`${apiBaseUrl}/checkout/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ line_items: lineItems }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const data = await response.json();
      const sessionId = data.id;

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      } else {
        throw new Error('Stripe initialization failed');
      }
    } catch (err) {
      console.error('Error creating checkout session:', err);
      setCheckoutError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { createCheckoutSession, loading, checkoutError };
};
