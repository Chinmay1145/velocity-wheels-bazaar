
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">Get the latest news about new arrivals and exclusive offers</p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent mb-4">
              🏎️ SuperCars
            </div>
            <p className="text-muted-foreground mb-4">
              India's premier destination for luxury supercars. Experience the ultimate in automotive excellence.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@supercars.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted-foreground hover:text-primary">About Us</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary">Contact</Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary">FAQ</Link>
              <Link to="/all-cars" className="block text-muted-foreground hover:text-primary">All Cars</Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-primary">Shopping Cart</Link>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-semibold mb-4">Brands</h4>
            <div className="space-y-2 text-sm">
              <Link to="/brand/ferrari" className="block text-muted-foreground hover:text-primary">Ferrari</Link>
              <Link to="/brand/lamborghini" className="block text-muted-foreground hover:text-primary">Lamborghini</Link>
              <Link to="/brand/mclaren" className="block text-muted-foreground hover:text-primary">McLaren</Link>
              <Link to="/brand/bugatti" className="block text-muted-foreground hover:text-primary">Bugatti</Link>
              <Link to="/brand/porsche" className="block text-muted-foreground hover:text-primary">Porsche</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Customer Support</h4>
            <div className="space-y-2 text-sm">
              <span className="block text-muted-foreground">Mon - Fri: 9AM - 8PM</span>
              <span className="block text-muted-foreground">Sat - Sun: 10AM - 6PM</span>
              <div className="flex space-x-4 mt-4">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            © 2024 SuperCars India. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link to="/refund" className="hover:text-primary">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
