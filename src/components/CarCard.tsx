
import React from 'react';
import { Car } from '@/types/Car';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 animate-scale-in hover:-translate-y-2 border-0 shadow-lg">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur">
              {car.year}
            </Badge>
          </div>
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className="bg-background/80 backdrop-blur">
              {car.brand}
            </Badge>
          </div>
        </div>
        <CardTitle className="px-4 pt-4 text-lg font-bold truncate">
          {car.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-4 pb-2">
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {car.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Power: {car.specifications.power}</span>
            <span>Top Speed: {car.specifications.topSpeed}</span>
          </div>
          
          <div className="flex items-center text-xs text-muted-foreground">
            <span>0-100: {car.specifications.acceleration}</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t">
          <div className="flex items-center space-x-1 text-2xl font-bold text-primary">
            <IndianRupee className="h-6 w-6" />
            <span>{formatPrice(car.price)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-0 flex gap-2">
        <Button
          onClick={() => addToCart(car)}
          className="flex-1 group/btn"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
          Add to Cart
        </Button>
        
        <Link to={`/car/${car.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
