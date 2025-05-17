import React, { useState } from 'react';
import { Card } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { CreditCard, Shield } from 'lucide-react';

const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: '/payment-icons/card.png',
    description: 'Pay securely with your credit or debit card'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: '/payment-icons/paypal.png',
    description: 'Safe payment with PayPal'
  },
  {
    id: 'googlepay',
    name: 'Google Pay',
    icon: '/payment-icons/googlepay.png',
    description: 'Quick payment with Google Pay'
  },
  {
    id: 'applepay',
    name: 'Apple Pay',
    icon: '/payment-icons/applepay.png',
    description: 'Convenient payment with Apple Pay'
  }
];

const PaymentMethodSection: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Payment Method</h2>
          <p className="text-gray-600">Choose your preferred way to pay</p>
        </div>

        <Card className="p-6">
          <RadioGroup
            value={selectedMethod}
            onValueChange={setSelectedMethod}
            className="space-y-4"
          >
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`flex items-center space-x-4 p-4 rounded-lg border ${
                  selectedMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <RadioGroupItem value={method.id} id={method.id} />
                <img
                  src={method.icon}
                  alt={method.name}
                  className="h-8 w-auto"
                />
                <div className="flex-1">
                  <Label
                    htmlFor={method.id}
                    className="text-base font-medium text-gray-900"
                  >
                    {method.name}
                  </Label>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              </div>
            ))}
          </RadioGroup>

          <div className="mt-8">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-lg h-12">
              <CreditCard className="mr-2 h-5 w-5" />
              Proceed to Payment
            </Button>
            
            <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
              <Shield className="h-4 w-4 mr-2" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </div>
        </Card>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <img
            src="/payment-icons/stripe.png"
            alt="Stripe"
            className="h-8"
          />
          <img
            src="/payment-icons/secure.png"
            alt="Secure Payment"
            className="h-8"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodSection; 