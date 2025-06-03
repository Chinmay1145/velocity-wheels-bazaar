
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Home, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
              <Check className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-green-600 animate-fade-in">
              Order Confirmed!
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Thank you for your purchase! Your supercar order has been successfully placed.
              </p>
              
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>You'll receive an order confirmation email within 5 minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Our team will contact you within 24 hours to arrange delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>White-glove delivery service to your specified location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Complete documentation and registration assistance</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@supercars.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/">
                <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                  <Home className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
              
              <Button variant="outline">
                Track Your Order
              </Button>
            </div>
            
            <div className="text-xs text-muted-foreground pt-4 border-t">
              Order ID: SC-{Date.now()}-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Success;
