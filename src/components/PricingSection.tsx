import { Check } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const pricingPlans = [
  {
    name: 'Free',
    price: '₹0',
    description: 'Perfect for getting started',
    features: [
      'Access to basic courses',
      'Community forum access',
      'Email support',
      'Basic course materials',
      'Course completion certificate',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Standard',
    price: '₹999',
    description: 'Best for individual learners',
    features: [
      'All Free features',
      'Unlimited course access',
      'Priority email support',
      'Downloadable resources',
      'Project assignments',
      'Peer feedback sessions',
    ],
    buttonText: 'Subscribe Now',
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹1,999',
    description: 'For serious learners',
    features: [
      'All Standard features',
      '1-on-1 mentoring',
      'Live workshop access',
      'Career guidance',
      'Industry projects',
      'Job placement assistance',
      'LinkedIn certification',
    ],
    buttonText: 'Go Premium',
    popular: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your learning goals. All plans come with a 7-day money-back
            guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
                <CardDescription className="text-center">{plan.description}</CardDescription>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
