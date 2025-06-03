
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Truck, Phone, CreditCard } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-level encryption and secure payment processing'
    },
    {
      icon: Award,
      title: 'Certified Dealers',
      description: 'Authorized dealership with manufacturer warranties'
    },
    {
      icon: Users,
      title: '500+ Happy Customers',
      description: 'Trusted by supercar enthusiasts nationwide'
    },
    {
      icon: Truck,
      title: 'Safe Delivery',
      description: 'Insured transportation and white-glove delivery'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    },
    {
      icon: CreditCard,
      title: 'Flexible Financing',
      description: 'Competitive rates and easy approval process'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SuperCars India</h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in luxury automotive excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {indicators.map((indicator, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <indicator.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{indicator.title}</h3>
                <p className="text-xs text-muted-foreground">{indicator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
