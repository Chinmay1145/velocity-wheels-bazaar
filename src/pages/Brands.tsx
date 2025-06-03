
import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const Brands = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Premium Brands
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore luxury supercars from the world's most prestigious manufacturers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link key={brand.id} to={`/brand/${brand.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {brand.logo}
                  </div>
                  <CardTitle className="text-xl font-bold">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {brand.description}
                  </p>
                  <div className="space-y-2">
                    <div className="inline-flex items-center space-x-2 text-sm">
                      <span className="bg-primary/10 px-3 py-1 rounded-full">
                        {brand.cars.length} Models
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Starting from ₹{Math.min(...brand.cars.map(car => car.price)).toLocaleString('en-IN')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
