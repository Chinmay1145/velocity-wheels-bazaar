
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { brands } from '@/data/cars';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShoppingCart, IndianRupee, Check } from 'lucide-react';

const CarDetails = () => {
  const { carId } = useParams();
  const { addToCart } = useCart();
  
  const car = brands
    .flatMap(brand => brand.cars)
    .find(car => car.id === carId);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="outline" className="bg-background/80 backdrop-blur">
                  {car.brand}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur">
                  {car.year}
                </Badge>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{car.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{car.description}</p>
              <div className="flex items-center space-x-2 text-3xl font-bold text-primary">
                <IndianRupee className="h-8 w-8" />
                <span>{formatPrice(car.price)}</span>
              </div>
            </div>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Engine</h4>
                    <p className="text-sm">{car.specifications.engine}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Power</h4>
                    <p className="text-sm">{car.specifications.power}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Top Speed</h4>
                    <p className="text-sm">{car.specifications.topSpeed}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">0-100 km/h</h4>
                    <p className="text-sm">{car.specifications.acceleration}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">Transmission</h4>
                    <p className="text-sm">{car.specifications.transmission}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Year</h4>
                    <p className="text-lg font-bold">{car.year}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Color</h4>
                    <p className="text-lg font-bold">{car.color}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={() => addToCart(car)}
                className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Link to="/cart" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
