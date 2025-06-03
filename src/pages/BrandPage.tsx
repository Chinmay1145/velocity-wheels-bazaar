
import React from 'react';
import { useParams } from 'react-router-dom';
import { brands } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandPage = () => {
  const { brandId } = useParams();
  const brand = brands.find(b => b.id === brandId);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Brand Not Found</h1>
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

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center">
            <div className="text-6xl mb-4">{brand.logo}</div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {brand.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              {brand.description}
            </p>
            <div className="inline-flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                {brand.cars.length} Models Available
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                Premium Collection
              </span>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brand.cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
