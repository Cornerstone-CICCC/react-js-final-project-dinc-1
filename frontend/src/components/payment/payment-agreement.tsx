import React from 'react';

const PaymentAgreement = () => {
  return (
    <div>
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          By proceeding, you agree to our{' '}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Need help? Contact our{' '}
          <a href="/support" className="text-blue-600 hover:underline">
            support team
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PaymentAgreement;
