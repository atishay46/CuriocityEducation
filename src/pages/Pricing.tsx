import React from 'react';
import PricingSection from '../components/PricingSection';
import PaymentMethodSection from '../components/PaymentMethodSection';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PricingSection />
      <PaymentMethodSection />
    </div>
  );
};

export default Pricing; 