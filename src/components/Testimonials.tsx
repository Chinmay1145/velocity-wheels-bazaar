
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Vikram Singh',
      location: 'Mumbai',
      car: 'Ferrari 488 GTB',
      rating: 5,
      review: "Exceptional service and a seamless buying experience. The team's expertise and attention to detail made purchasing my dream Ferrari an absolute pleasure.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      name: 'Ananya Sharma',
      location: 'Delhi',
      car: 'Lamborghini Huracán',
      rating: 5,
      review: "From the initial consultation to delivery, everything was perfect. The financing options were flexible and the after-sales support is outstanding.",
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b743?w=100&h=100&fit=crop'
    },
    {
      name: 'Rajesh Patel',
      location: 'Bangalore',
      car: 'McLaren 720S',
      rating: 5,
      review: "Professional team with deep knowledge of supercars. They helped me find exactly what I was looking for and the entire process was smooth and transparent.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by supercar enthusiasts across India
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.car}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
