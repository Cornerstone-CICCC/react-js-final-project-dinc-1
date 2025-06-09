'use client';
import emailjs from '@emailjs/browser';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { ContactFormData, contactFormSchema } from '@/schemas/contactSchema';
import { Textarea } from '../ui/textarea';
import { useRouter } from 'next/navigation';
import { CommonAlert } from '../ui/common-alert';
import { useState } from 'react';

const ContactForm = () => {
  const router = useRouter();

  const [showAlert, setShowAlert] = useState<boolean>(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      contact: '',
      address: '',
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { name, email, contact, address, message } = data;

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          email,
          contact,
          address,
          message,
          to_name: 'Happy Shopping DINCA',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      console.log(result.status);
      form.reset({
        name: '',
        email: '',
        contact: '',
        address: '',
        message: '',
      });

      setTimeout(() => {
        router.push('/');
      }, 5000);
    } catch (error) {
      console.error(error);
      setShowAlert(true);
    }
  };

  return (
    <>
      <div className="pb-6">
        <CommonAlert
          show={showAlert}
          variant="destructive"
          title="Error"
          description="Something wrong, try again"
        />
      </div>
      <div className="max-w-xl mx-auto py-10 md:py-20">
        <div className="space-y-3 mb-8">
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>
          <h3 className="text-xl text-center">
            We’d love to hear from you — reach out anytime.
          </h3>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="h-14 text-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address (e.g. your@email.com)"
                        className="h-14 text-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Contact</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone number or other contact info"
                        className="h-14 text-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      Address (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your address"
                        className="h-14 text-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        className="text-md"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full p-5 text-lg" type="submit">
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
