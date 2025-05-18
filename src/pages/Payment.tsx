import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCard, Shield, ArrowLeft } from 'lucide-react';

const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    description: 'Pay securely with your credit or debit card',
    icon: '💳'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Safe payment with PayPal',
    icon: '🔒'
  },
  {
    id: 'googlepay',
    name: 'Google Pay',
    description: 'Quick payment with Google Pay',
    icon: '📱'
  },
  {
    id: 'applepay',
    name: 'Apple Pay',
    description: 'Convenient payment with Apple Pay',
    icon: '🍎'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Secure payment with Stripe',
    icon: '🔐'
  }
];

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const location = useLocation();
  const navigate = useNavigate();
  const courseDetails = location.state?.courseDetails;

  if (!courseDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No course selected</h2>
          <Button onClick={() => navigate('/courses')} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Courses
          </Button>
        </div>
      </div>
    );
  }

  const handlePayment = () => {
    // Here you would integrate with your payment provider
    alert('Payment processing would be implemented here');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Course Summary */}
        <Card className="mb-8">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center mb-4">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <h2 className="text-2xl font-bold text-foreground">
                Complete Your Purchase
              </h2>
            </div>
            
            <div className="py-4">
              <h3 className="font-semibold mb-2 text-foreground">{courseDetails.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Course Fee</span>
                <span className="text-2xl font-bold text-primary">
                  {courseDetails.price}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Method Selection */}
        <Card>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Select Payment Method</h3>
            
            <RadioGroup
              value={selectedMethod}
              onValueChange={setSelectedMethod}
              className="space-y-4"
            >
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`flex items-center space-x-4 p-4 rounded-lg border transition-all ${
                    selectedMethod === method.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <RadioGroupItem value={method.id} id={method.id} />
                  <span className="text-2xl">{method.icon}</span>
                  <div className="flex-1">
                    <Label
                      htmlFor={method.id}
                      className="text-base font-medium text-foreground"
                    >
                      {method.name}
                    </Label>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>

            <Button
              className="w-full mt-8 h-12 text-lg bg-green-600 hover:bg-green-700 text-white transition-colors"
              onClick={handlePayment}
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Pay {courseDetails.price}
            </Button>

            <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
              <Shield className="h-4 w-4 mr-2" />
              <span>Your payment information is secure and encrypted</span>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <div className="flex justify-center space-x-6">
                <div className="text-xs text-muted-foreground flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Secure Payment
                </div>
                <div className="text-xs text-muted-foreground flex items-center">
                  <CreditCard className="h-4 w-4 mr-1" />
                  Bank Level Security
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Payment; 