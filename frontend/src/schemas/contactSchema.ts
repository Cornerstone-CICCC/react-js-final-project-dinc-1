'use client';

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(20, { message: 'Name must be less than 20 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  contact: z
    .string()
    .regex(/^\d{10,11}$/, 'Contact number must be in 10-11 numbers.'),
  address: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(500, { message: 'Message must be less than 500 characters' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
