import { z } from 'zod';

export const shippingSchema = z.object({
  fullName: z.string().min(1, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(1, 'Please enter your address'),
  city: z.string().min(1, 'Please enter your city'),
  state: z.string().min(1, 'Please enter your state'),
  postalCode: z.string().min(1, 'Please enter your postal code'),
  country: z.string().min(1, 'Please enter your country'),
});

export type ShippingFormInputs = z.infer<typeof shippingSchema>; 