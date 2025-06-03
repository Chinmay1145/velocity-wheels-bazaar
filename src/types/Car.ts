
export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  specifications: {
    engine: string;
    power: string;
    topSpeed: string;
    acceleration: string;
    transmission: string;
  };
  features: string[];
  year: number;
  color: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  cars: Car[];
}
