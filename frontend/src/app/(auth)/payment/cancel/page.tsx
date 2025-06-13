import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Order Canceled',
  description: 'Order Canceled',
};

const PaymentCancelPage = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="space-y-5 text-center">
        <h2 className="text-6xl font-bold">Order Canceled</h2>
        <p className="text-muted-foreground mb-8">
          Your purchase has been canceled. Please try again.
        </p>
        <Button variant={'outline'} asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default PaymentCancelPage;
