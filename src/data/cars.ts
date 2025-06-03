
import { Brand } from '@/types/Car';

export const brands: Brand[] = [
  {
    id: 'ferrari',
    name: 'Ferrari',
    logo: '🏎️',
    description: 'Italian luxury sports car manufacturer',
    cars: [
      {
        id: 'ferrari-f8',
        name: 'F8 Tributo',
        brand: 'Ferrari',
        price: 35000000,
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
        description: 'The F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse\'s classic two-seater berlinetta.',
        specifications: {
          engine: '3.9L Twin-Turbo V8',
          power: '710 HP',
          topSpeed: '340 km/h',
          acceleration: '0-100 km/h in 2.9s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Carbon Fiber Body', 'Active Aerodynamics', 'Race Mode', 'Premium Leather Interior'],
        year: 2023,
        color: 'Rosso Corsa Red'
      },
      {
        id: 'ferrari-sf90',
        name: 'SF90 Stradale',
        brand: 'Ferrari',
        price: 55000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'Ferrari\'s first series production plug-in hybrid supercar.',
        specifications: {
          engine: '4.0L Twin-Turbo V8 Hybrid',
          power: '986 HP',
          topSpeed: '340 km/h',
          acceleration: '0-100 km/h in 2.5s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Hybrid Technology', 'All-Wheel Drive', 'Carbon Fiber Monocoque', 'Digital Cockpit'],
        year: 2023,
        color: 'Nero Black'
      },
      {
        id: 'ferrari-812',
        name: '812 Superfast',
        brand: 'Ferrari',
        price: 42000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        description: 'The 812 Superfast is the most powerful and fastest Ferrari in the marque\'s history.',
        specifications: {
          engine: '6.5L Naturally Aspirated V12',
          power: '789 HP',
          topSpeed: '340 km/h',
          acceleration: '0-100 km/h in 2.9s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['V12 Engine', 'Rear-Wheel Steering', 'Magnetic Dampers', 'Premium Audio'],
        year: 2023,
        color: 'Blu Pozzi Blue'
      },
      {
        id: 'ferrari-roma',
        name: 'Roma',
        brand: 'Ferrari',
        price: 28000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        description: 'The Ferrari Roma is a grand touring sports car with timeless design.',
        specifications: {
          engine: '3.9L Twin-Turbo V8',
          power: '612 HP',
          topSpeed: '320 km/h',
          acceleration: '0-100 km/h in 3.4s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Retractable Hardtop', 'GT Comfort', 'Advanced Infotainment', 'Luxury Interior'],
        year: 2023,
        color: 'Grigio Silverstone'
      },
      {
        id: 'ferrari-portofino',
        name: 'Portofino M',
        brand: 'Ferrari',
        price: 25000000,
        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop',
        description: 'The Ferrari Portofino M is a grand touring sports car with a retractable hardtop.',
        specifications: {
          engine: '3.9L Twin-Turbo V8',
          power: '612 HP',
          topSpeed: '320 km/h',
          acceleration: '0-100 km/h in 3.45s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Convertible Top', 'Race Manettino', 'Premium Sound', 'Wind Deflector'],
        year: 2023,
        color: 'Rosso Portofino'
      },
      {
        id: 'ferrari-296gtb',
        name: '296 GTB',
        brand: 'Ferrari',
        price: 38000000,
        image: 'https://images.unsplash.com/photo-1627454820516-d0e5cf5b3c02?w=800&h=600&fit=crop',
        description: 'The 296 GTB redefines the whole concept of fun behind the wheel.',
        specifications: {
          engine: '2.9L Twin-Turbo V6 Hybrid',
          power: '818 HP',
          topSpeed: '330 km/h',
          acceleration: '0-100 km/h in 2.9s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Hybrid V6', 'Lightweight Design', 'Active Aerodynamics', 'Digital Interface'],
        year: 2023,
        color: 'Giallo Modena'
      },
      {
        id: 'ferrari-daytona',
        name: 'Daytona SP3',
        brand: 'Ferrari',
        price: 85000000,
        image: 'https://images.unsplash.com/photo-1614026480102-e1501d53b94d?w=800&h=600&fit=crop',
        description: 'Limited edition supercar inspired by Ferrari\'s racing heritage.',
        specifications: {
          engine: '6.5L Naturally Aspirated V12',
          power: '829 HP',
          topSpeed: '340 km/h',
          acceleration: '0-100 km/h in 2.85s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Limited Edition', 'Carbon Fiber Body', 'Racing Heritage', 'Exclusive Design'],
        year: 2023,
        color: 'Rosso Magma'
      },
      {
        id: 'ferrari-purosangue',
        name: 'Purosangue',
        brand: 'Ferrari',
        price: 65000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        description: 'Ferrari\'s first four-door, four-seater car.',
        specifications: {
          engine: '6.5L Naturally Aspirated V12',
          power: '715 HP',
          topSpeed: '310 km/h',
          acceleration: '0-100 km/h in 3.3s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Four Doors', 'All-Wheel Drive', 'Luxury Comfort', 'Active Suspension'],
        year: 2023,
        color: 'Nero Stellato'
      },
      {
        id: 'ferrari-monza',
        name: 'Monza SP2',
        brand: 'Ferrari',
        price: 95000000,
        image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop',
        description: 'Limited production speedster with no roof or windscreen.',
        specifications: {
          engine: '6.5L Naturally Aspirated V12',
          power: '799 HP',
          topSpeed: '300 km/h',
          acceleration: '0-100 km/h in 2.9s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Speedster Design', 'No Roof', 'Racing Heritage', 'Ultra-Limited'],
        year: 2023,
        color: 'Blu Corsa'
      },
      {
        id: 'ferrari-488',
        name: '488 Pista',
        brand: 'Ferrari',
        price: 45000000,
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
        description: 'Track-focused variant of the 488 GTB.',
        specifications: {
          engine: '3.9L Twin-Turbo V8',
          power: '710 HP',
          topSpeed: '340 km/h',
          acceleration: '0-100 km/h in 2.85s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Track-Focused', 'Aerodynamic Package', 'Weight Reduction', 'Racing Technology'],
        year: 2023,
        color: 'Giallo Triplo Strato'
      }
    ]
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    logo: '🐂',
    description: 'Italian luxury sports car manufacturer',
    cars: [
      {
        id: 'lambo-huracan',
        name: 'Huracán EVO',
        brand: 'Lamborghini',
        price: 32000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'The Huracán EVO represents the natural evolution of the most successful V10-powered Lamborghini ever.',
        specifications: {
          engine: '5.2L Naturally Aspirated V10',
          power: '631 HP',
          topSpeed: '325 km/h',
          acceleration: '0-100 km/h in 2.9s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['All-Wheel Drive', 'Dynamic Steering', 'Advanced Aerodynamics', 'LDVI System'],
        year: 2023,
        color: 'Verde Mantis'
      },
      {
        id: 'lambo-aventador',
        name: 'Aventador SVJ',
        brand: 'Lamborghini',
        price: 75000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'The most powerful and aggressive Aventador ever created.',
        specifications: {
          engine: '6.5L Naturally Aspirated V12',
          power: '759 HP',
          topSpeed: '350 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '7-Speed ISR'
        },
        features: ['ALA 2.0 Aerodynamics', 'Carbon Fiber Monocoque', 'Track Mode', 'Magnetic Dampers'],
        year: 2023,
        color: 'Arancio Atlas'
      },
      {
        id: 'lambo-urus',
        name: 'Urus Performante',
        brand: 'Lamborghini',
        price: 45000000,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        description: 'The world\'s first Super Sport Utility Vehicle.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '641 HP',
          topSpeed: '306 km/h',
          acceleration: '0-100 km/h in 3.3s',
          transmission: '8-Speed Automatic'
        },
        features: ['Super SUV', 'All-Terrain Capability', 'Luxury Interior', 'Advanced Electronics'],
        year: 2023,
        color: 'Nero Noctis'
      },
      {
        id: 'lambo-revuelto',
        name: 'Revuelto',
        brand: 'Lamborghini',
        price: 85000000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        description: 'The first high-performance electrified Lamborghini.',
        specifications: {
          engine: '6.5L V12 Hybrid',
          power: '1001 HP',
          topSpeed: '350 km/h',
          acceleration: '0-100 km/h in 2.5s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Hybrid Technology', 'All-Wheel Drive', 'Carbon Monocoque', 'Electric Motors'],
        year: 2023,
        color: 'Blu Glauco'
      },
      {
        id: 'lambo-gallardo',
        name: 'Gallardo LP 570-4',
        brand: 'Lamborghini',
        price: 28000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        description: 'Lightweight and powerful variant of the Gallardo.',
        specifications: {
          engine: '5.2L Naturally Aspirated V10',
          power: '562 HP',
          topSpeed: '325 km/h',
          acceleration: '0-100 km/h in 3.4s',
          transmission: '6-Speed Manual'
        },
        features: ['Lightweight Construction', 'Carbon Fiber Parts', 'Racing Inspired', 'Manual Transmission'],
        year: 2023,
        color: 'Giallo Midas'
      },
      {
        id: 'lambo-murcielago',
        name: 'Murciélago LP 640',
        brand: 'Lamborghini',
        price: 38000000,
        image: 'https://images.unsplash.com/photo-1627454820516-d0e5cf5b3c02?w=800&h=600&fit=crop',
        description: 'Classic Lamborghini with aggressive styling.',
        specifications: {
          engine: '6.2L Naturally Aspirated V12',
          power: '631 HP',
          topSpeed: '340 km/h',
          acceleration: '0-100 km/h in 3.8s',
          transmission: '6-Speed Manual'
        },
        features: ['Scissor Doors', 'All-Wheel Drive', 'Classic Design', 'V12 Sound'],
        year: 2023,
        color: 'Rosso Vik'
      },
      {
        id: 'lambo-countach',
        name: 'Countach LPI 800-4',
        brand: 'Lamborghini',
        price: 95000000,
        image: 'https://images.unsplash.com/photo-1614026480102-e1501d53b94d?w=800&h=600&fit=crop',
        description: 'Modern interpretation of the legendary Countach.',
        specifications: {
          engine: '6.5L V12 Hybrid',
          power: '803 HP',
          topSpeed: '355 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '7-Speed ISR'
        },
        features: ['Limited Edition', 'Hybrid Power', 'Retro-Modern Design', 'Supercapacitor'],
        year: 2023,
        color: 'Bianco Siderale'
      },
      {
        id: 'lambo-diablo',
        name: 'Diablo VT',
        brand: 'Lamborghini',
        price: 42000000,
        image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop',
        description: 'Classic supercar with timeless appeal.',
        specifications: {
          engine: '5.7L Naturally Aspirated V12',
          power: '492 HP',
          topSpeed: '325 km/h',
          acceleration: '0-100 km/h in 4.5s',
          transmission: '5-Speed Manual'
        },
        features: ['Classic Design', 'Naturally Aspirated V12', 'Manual Transmission', 'Iconic Status'],
        year: 2023,
        color: 'Viola Parsifae'
      },
      {
        id: 'lambo-espada',
        name: 'Espada Concept',
        brand: 'Lamborghini',
        price: 55000000,
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
        description: 'Modern revival of the classic four-seater.',
        specifications: {
          engine: '6.5L Naturally Aspirated V12',
          power: '729 HP',
          topSpeed: '320 km/h',
          acceleration: '0-100 km/h in 3.2s',
          transmission: '7-Speed ISR'
        },
        features: ['Four Seater', 'Grand Touring', 'Luxury Interior', 'Modern Technology'],
        year: 2023,
        color: 'Verde Scandal'
      },
      {
        id: 'lambo-sian',
        name: 'Sián FKP 37',
        brand: 'Lamborghini',
        price: 120000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        description: 'The most powerful Lamborghini ever created.',
        specifications: {
          engine: '6.5L V12 Hybrid',
          power: '819 HP',
          topSpeed: '350 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '7-Speed ISR'
        },
        features: ['Supercapacitor Technology', 'Limited Edition', 'Self-Healing Paint', 'Extreme Performance'],
        year: 2023,
        color: 'Verde Gea'
      }
    ]
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    logo: '🏁',
    description: 'British luxury sports car manufacturer',
    cars: [
      {
        id: 'mclaren-720s',
        name: '720S',
        brand: 'McLaren',
        price: 42000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        description: 'The 720S combines extreme performance with sophisticated design.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '710 HP',
          topSpeed: '341 km/h',
          acceleration: '0-100 km/h in 2.9s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Carbon Fiber Monocoque', 'Adaptive Dampers', 'Dihedral Doors', 'Track Mode'],
        year: 2023,
        color: 'McLaren Orange'
      },
      {
        id: 'mclaren-750s',
        name: '750S',
        brand: 'McLaren',
        price: 48000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'The most powerful series production McLaren supercar.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '740 HP',
          topSpeed: '332 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Enhanced Aerodynamics', 'Lightweight Design', 'Advanced Electronics', 'Track-Focused'],
        year: 2023,
        color: 'Papaya Spark'
      },
      {
        id: 'mclaren-765lt',
        name: '765LT',
        brand: 'McLaren',
        price: 55000000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        description: 'The most track-focused McLaren 720S variant.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '755 HP',
          topSpeed: '330 km/h',
          acceleration: '0-100 km/h in 2.7s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Longtail Design', 'Carbon Fiber Body', 'Track Aerodynamics', 'Weight Reduction'],
        year: 2023,
        color: 'Strata Theme'
      },
      {
        id: 'mclaren-artura',
        name: 'Artura',
        brand: 'McLaren',
        price: 38000000,
        image: 'https://images.unsplash.com/photo-1627454820516-d0e5cf5b3c02?w=800&h=600&fit=crop',
        description: 'McLaren\'s first production hybrid supercar.',
        specifications: {
          engine: '3.0L Twin-Turbo V6 Hybrid',
          power: '671 HP',
          topSpeed: '330 km/h',
          acceleration: '0-100 km/h in 3.0s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Hybrid Technology', 'Carbon Tub', 'Electric Mode', 'Advanced Infotainment'],
        year: 2023,
        color: 'Volcano Yellow'
      },
      {
        id: 'mclaren-gt',
        name: 'GT',
        brand: 'McLaren',
        price: 35000000,
        image: 'https://images.unsplash.com/photo-1614026480102-e1501d53b94d?w=800&h=600&fit=crop',
        description: 'The most refined and comfortable McLaren.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '612 HP',
          topSpeed: '326 km/h',
          acceleration: '0-100 km/h in 3.2s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Grand Touring Comfort', 'Luggage Space', 'Adaptive Suspension', 'Luxury Interior'],
        year: 2023,
        color: 'Ceramic Grey'
      },
      {
        id: 'mclaren-p1',
        name: 'P1',
        brand: 'McLaren',
        price: 150000000,
        image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop',
        description: 'Limited production hybrid hypercar.',
        specifications: {
          engine: '3.8L Twin-Turbo V8 Hybrid',
          power: '903 HP',
          topSpeed: '350 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Hybrid Hypercar', 'Active Aerodynamics', 'Limited Production', 'F1 Technology'],
        year: 2023,
        color: 'McLaren Orange'
      },
      {
        id: 'mclaren-senna',
        name: 'Senna',
        brand: 'McLaren',
        price: 125000000,
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
        description: 'The ultimate track-focused McLaren.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '789 HP',
          topSpeed: '340 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Track-Only Focus', 'Active Aero', 'Carbon Fiber Construction', 'Racing Technology'],
        year: 2023,
        color: 'Senna Orange'
      },
      {
        id: 'mclaren-speedtail',
        name: 'Speedtail',
        brand: 'McLaren',
        price: 175000000,
        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop',
        description: 'The fastest McLaren ever created.',
        specifications: {
          engine: '4.0L Twin-Turbo V8 Hybrid',
          power: '1035 HP',
          topSpeed: '403 km/h',
          acceleration: '0-100 km/h in 2.5s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Hyper-GT', 'Three-Seat Layout', 'Active Aero', 'Carbon Fiber Body'],
        year: 2023,
        color: 'Speedtail Silver'
      },
      {
        id: 'mclaren-600lt',
        name: '600LT',
        brand: 'McLaren',
        price: 45000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        description: 'The track-focused variant of the 570S.',
        specifications: {
          engine: '3.8L Twin-Turbo V8',
          power: '592 HP',
          topSpeed: '328 km/h',
          acceleration: '0-100 km/h in 2.9s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Longtail Design', 'Weight Reduction', 'Enhanced Aerodynamics', 'Track Setup'],
        year: 2023,
        color: 'Lantana Purple'
      },
      {
        id: 'mclaren-elva',
        name: 'Elva',
        brand: 'McLaren',
        price: 200000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        description: 'Open-cockpit speedster with no roof or windscreen.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '804 HP',
          topSpeed: '326 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['No Roof', 'No Windscreen', 'Active Air Management', 'Ultra-Exclusive'],
        year: 2023,
        color: 'Elva Blue'
      }
    ]
  },
  {
    id: 'bugatti',
    name: 'Bugatti',
    logo: '🐎',
    description: 'French luxury automotive manufacturer',
    cars: [
      {
        id: 'bugatti-chiron',
        name: 'Chiron',
        brand: 'Bugatti',
        price: 350000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'The ultimate expression of automotive luxury and performance.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1479 HP',
          topSpeed: '420 km/h',
          acceleration: '0-100 km/h in 2.4s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Quad-Turbo W16', 'All-Wheel Drive', 'Luxury Interior', 'Carbon Monocoque'],
        year: 2023,
        color: 'French Racing Blue'
      },
      {
        id: 'bugatti-divo',
        name: 'Divo',
        brand: 'Bugatti',
        price: 450000000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        description: 'Track-focused variant of the Chiron.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1479 HP',
          topSpeed: '380 km/h',
          acceleration: '0-100 km/h in 2.4s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Enhanced Aerodynamics', 'Weight Reduction', 'Track Focus', 'Limited Edition'],
        year: 2023,
        color: 'Divo Blue'
      },
      {
        id: 'bugatti-centodieci',
        name: 'Centodieci',
        brand: 'Bugatti',
        price: 850000000,
        image: 'https://images.unsplash.com/photo-1627454820516-d0e5cf5b3c02?w=800&h=600&fit=crop',
        description: 'Homage to the legendary EB110.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1577 HP',
          topSpeed: '380 km/h',
          acceleration: '0-100 km/h in 2.4s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['EB110 Inspired', 'Ultra-Limited', 'Enhanced Power', 'Exclusive Design'],
        year: 2023,
        color: 'EB110 White'
      },
      {
        id: 'bugatti-veyron',
        name: 'Veyron 16.4',
        brand: 'Bugatti',
        price: 280000000,
        image: 'https://images.unsplash.com/photo-1614026480102-e1501d53b94d?w=800&h=600&fit=crop',
        description: 'The car that redefined automotive performance.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1001 HP',
          topSpeed: '407 km/h',
          acceleration: '0-100 km/h in 2.5s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Legendary Status', 'W16 Engine', 'All-Wheel Drive', 'Luxury Craftsmanship'],
        year: 2023,
        color: 'Nocturne Black'
      },
      {
        id: 'bugatti-la-voiture',
        name: 'La Voiture Noire',
        brand: 'Bugatti',
        price: 1200000000,
        image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop',
        description: 'The most expensive car ever sold.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1479 HP',
          topSpeed: '420 km/h',
          acceleration: '0-100 km/h in 2.4s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['One-Off Creation', 'Type 57 Atlantic Tribute', 'Carbon Fiber Body', 'Ultimate Luxury'],
        year: 2023,
        color: 'Deep Black'
      },
      {
        id: 'bugatti-mistral',
        name: 'Mistral',
        brand: 'Bugatti',
        price: 550000000,
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
        description: 'The last W16-powered roadster.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1577 HP',
          topSpeed: '420 km/h',
          acceleration: '0-100 km/h in 2.4s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Roadster Design', 'Final W16', 'Open-Top Driving', 'Limited Production'],
        year: 2023,
        color: 'Sky Blue'
      },
      {
        id: 'bugatti-bolide',
        name: 'Bolide',
        brand: 'Bugatti',
        price: 450000000,
        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop',
        description: 'Track-only hypercar with extreme performance.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1824 HP',
          topSpeed: '500+ km/h',
          acceleration: '0-100 km/h in 2.17s',
          transmission: '7-Speed Sequential'
        },
        features: ['Track-Only', 'Extreme Aerodynamics', 'Lightweight Construction', 'Maximum Performance'],
        year: 2023,
        color: 'Racing Blue'
      },
      {
        id: 'bugatti-eb110',
        name: 'EB110 Tribute',
        brand: 'Bugatti',
        price: 380000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        description: 'Modern interpretation of the classic EB110.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1479 HP',
          topSpeed: '420 km/h',
          acceleration: '0-100 km/h in 2.4s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Heritage Design', 'Modern Technology', 'All-Wheel Drive', 'Carbon Construction'],
        year: 2023,
        color: 'Classic Blue'
      },
      {
        id: 'bugatti-tourbillon',
        name: 'Tourbillon',
        brand: 'Bugatti',
        price: 650000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        description: 'The future of Bugatti hybrid technology.',
        specifications: {
          engine: '8.3L V16 Hybrid',
          power: '1775 HP',
          topSpeed: '445 km/h',
          acceleration: '0-100 km/h in 2.0s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Hybrid V16', 'Next-Gen Technology', 'Electric Motors', 'Future Design'],
        year: 2023,
        color: 'Platinum Silver'
      },
      {
        id: 'bugatti-atlantique',
        name: 'Atlantique Grand Sport',
        brand: 'Bugatti',
        price: 750000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'Open-top grand touring masterpiece.',
        specifications: {
          engine: '8.0L Quad-Turbo W16',
          power: '1479 HP',
          topSpeed: '408 km/h',
          acceleration: '0-100 km/h in 2.5s',
          transmission: '7-Speed Dual-Clutch'
        },
        features: ['Convertible Top', 'Grand Touring', 'Luxury Interior', 'Wind Management'],
        year: 2023,
        color: 'Atlantic Blue'
      }
    ]
  },
  {
    id: 'porsche',
    name: 'Porsche',
    logo: '🏎️',
    description: 'German luxury sports car manufacturer',
    cars: [
      {
        id: 'porsche-911-gt3',
        name: '911 GT3 RS',
        brand: 'Porsche',
        price: 28000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'The most track-focused 911 ever created.',
        specifications: {
          engine: '4.0L Naturally Aspirated Flat-6',
          power: '518 HP',
          topSpeed: '296 km/h',
          acceleration: '0-100 km/h in 3.2s',
          transmission: '7-Speed PDK'
        },
        features: ['Track-Focused', 'Rear-Wheel Steering', 'Carbon Fiber Parts', 'Racing Suspension'],
        year: 2023,
        color: 'GT Silver'
      },
      {
        id: 'porsche-918',
        name: '918 Spyder',
        brand: 'Porsche',
        price: 95000000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        description: 'Hybrid hypercar with incredible performance.',
        specifications: {
          engine: '4.6L V8 Hybrid',
          power: '887 HP',
          topSpeed: '345 km/h',
          acceleration: '0-100 km/h in 2.6s',
          transmission: '7-Speed PDK'
        },
        features: ['Hybrid Technology', 'All-Wheel Drive', 'Carbon Monocoque', 'Active Aerodynamics'],
        year: 2023,
        color: 'Racing Yellow'
      },
      {
        id: 'porsche-carrera-gt',
        name: 'Carrera GT',
        brand: 'Porsche',
        price: 85000000,
        image: 'https://images.unsplash.com/photo-1627454820516-d0e5cf5b3c02?w=800&h=600&fit=crop',
        description: 'Legendary V10-powered supercar.',
        specifications: {
          engine: '5.7L Naturally Aspirated V10',
          power: '603 HP',
          topSpeed: '330 km/h',
          acceleration: '0-100 km/h in 3.9s',
          transmission: '6-Speed Manual'
        },
        features: ['V10 Engine', 'Manual Transmission', 'Carbon Monocoque', 'Racing Heritage'],
        year: 2023,
        color: 'Silver Metallic'
      },
      {
        id: 'porsche-taycan-turbo',
        name: 'Taycan Turbo S',
        brand: 'Porsche',
        price: 22000000,
        image: 'https://images.unsplash.com/photo-1614026480102-e1501d53b94d?w=800&h=600&fit=crop',
        description: 'High-performance electric sports car.',
        specifications: {
          engine: 'Dual Electric Motors',
          power: '750 HP',
          topSpeed: '260 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '2-Speed Automatic'
        },
        features: ['Full Electric', 'All-Wheel Drive', 'Fast Charging', 'Advanced Tech'],
        year: 2023,
        color: 'Frozen Blue'
      },
      {
        id: 'porsche-cayman-gt4',
        name: 'Cayman GT4 RS',
        brand: 'Porsche',
        price: 18000000,
        image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop',
        description: 'Mid-engine track-focused sports car.',
        specifications: {
          engine: '4.0L Naturally Aspirated Flat-6',
          power: '493 HP',
          topSpeed: '315 km/h',
          acceleration: '0-100 km/h in 3.4s',
          transmission: '7-Speed PDK'
        },
        features: ['Mid-Engine Layout', 'Track Suspension', 'Carbon Fiber Parts', 'Racing Brakes'],
        year: 2023,
        color: 'Python Green'
      },
      {
        id: 'porsche-panamera',
        name: 'Panamera Turbo S E-Hybrid',
        brand: 'Porsche',
        price: 25000000,
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
        description: 'High-performance luxury sedan.',
        specifications: {
          engine: '4.0L Twin-Turbo V8 Hybrid',
          power: '689 HP',
          topSpeed: '315 km/h',
          acceleration: '0-100 km/h in 3.2s',
          transmission: '8-Speed PDK'
        },
        features: ['Four Doors', 'Hybrid Power', 'Luxury Interior', 'All-Wheel Drive'],
        year: 2023,
        color: 'Volcano Grey'
      },
      {
        id: 'porsche-macan',
        name: 'Macan Turbo',
        brand: 'Porsche',
        price: 15000000,
        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop',
        description: 'Compact luxury performance SUV.',
        specifications: {
          engine: '2.9L Twin-Turbo V6',
          power: '434 HP',
          topSpeed: '270 km/h',
          acceleration: '0-100 km/h in 4.3s',
          transmission: '7-Speed PDK'
        },
        features: ['Compact SUV', 'All-Wheel Drive', 'Sport Suspension', 'Premium Interior'],
        year: 2023,
        color: 'Mamba Green'
      },
      {
        id: 'porsche-cayenne',
        name: 'Cayenne Turbo GT',
        brand: 'Porsche',
        price: 20000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        description: 'High-performance luxury SUV.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '631 HP',
          topSpeed: '300 km/h',
          acceleration: '0-100 km/h in 3.3s',
          transmission: '8-Speed Tiptronic'
        },
        features: ['Performance SUV', 'All-Wheel Drive', 'Air Suspension', 'Track Capability'],
        year: 2023,
        color: 'Jet Black'
      },
      {
        id: 'porsche-boxster',
        name: '718 Boxster GTS 4.0',
        brand: 'Porsche',
        price: 12000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        description: 'Open-top mid-engine sports car.',
        specifications: {
          engine: '4.0L Naturally Aspirated Flat-6',
          power: '394 HP',
          topSpeed: '293 km/h',
          acceleration: '0-100 km/h in 4.0s',
          transmission: '6-Speed Manual'
        },
        features: ['Convertible Top', 'Mid-Engine', 'Manual Transmission', 'Pure Driving'],
        year: 2023,
        color: 'Guards Red'
      },
      {
        id: 'porsche-911-turbo',
        name: '911 Turbo S',
        brand: 'Porsche',
        price: 32000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'The ultimate everyday supercar.',
        specifications: {
          engine: '3.8L Twin-Turbo Flat-6',
          power: '640 HP',
          topSpeed: '330 km/h',
          acceleration: '0-100 km/h in 2.7s',
          transmission: '8-Speed PDK'
        },
        features: ['All-Wheel Drive', 'Adaptive Suspension', 'Launch Control', 'Daily Usability'],
        year: 2023,
        color: 'Agate Grey'
      }
    ]
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    logo: '🦅',
    description: 'British luxury grand tourer manufacturer',
    cars: [
      {
        id: 'aston-db11',
        name: 'DB11 AMR',
        brand: 'Aston Martin',
        price: 25000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'The perfect grand touring sports car.',
        specifications: {
          engine: '5.2L Twin-Turbo V12',
          power: '630 HP',
          topSpeed: '334 km/h',
          acceleration: '0-100 km/h in 3.7s',
          transmission: '8-Speed Automatic'
        },
        features: ['Grand Touring', 'Luxury Interior', 'V12 Engine', 'British Craftsmanship'],
        year: 2023,
        color: 'Racing Green'
      },
      {
        id: 'aston-vantage',
        name: 'Vantage F1 Edition',
        brand: 'Aston Martin',
        price: 22000000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        description: 'Sports car inspired by Formula 1.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '503 HP',
          topSpeed: '314 km/h',
          acceleration: '0-100 km/h in 3.6s',
          transmission: '8-Speed Automatic'
        },
        features: ['F1 Inspired', 'Sport Suspension', 'Carbon Fiber', 'Track Focus'],
        year: 2023,
        color: 'Aston Martin Racing Green'
      },
      {
        id: 'aston-dbs',
        name: 'DBS 770 Ultimate',
        brand: 'Aston Martin',
        price: 38000000,
        image: 'https://images.unsplash.com/photo-1627454820516-d0e5cf5b3c02?w=800&h=600&fit=crop',
        description: 'The most powerful production Aston Martin.',
        specifications: {
          engine: '5.2L Twin-Turbo V12',
          power: '759 HP',
          topSpeed: '340 km/h',
          acceleration: '0-100 km/h in 3.4s',
          transmission: '8-Speed Automatic'
        },
        features: ['Ultimate Power', 'Carbon Fiber Construction', 'Track Aerodynamics', 'Limited Edition'],
        year: 2023,
        color: 'Ultimate Black'
      },
      {
        id: 'aston-valkyrie',
        name: 'Valkyrie',
        brand: 'Aston Martin',
        price: 350000000,
        image: 'https://images.unsplash.com/photo-1614026480102-e1501d53b94d?w=800&h=600&fit=crop',
        description: 'Formula 1-inspired hypercar.',
        specifications: {
          engine: '6.5L Naturally Aspirated V12 Hybrid',
          power: '1139 HP',
          topSpeed: '402 km/h',
          acceleration: '0-100 km/h in 2.5s',
          transmission: '7-Speed Sequential'
        },
        features: ['F1 Technology', 'Active Aerodynamics', 'Carbon Monocoque', 'Track-Focused'],
        year: 2023,
        color: 'Stirling Green'
      },
      {
        id: 'aston-victor',
        name: 'Victor',
        brand: 'Aston Martin',
        price: 180000000,
        image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop',
        description: 'One-off track-focused creation.',
        specifications: {
          engine: '7.3L Naturally Aspirated V12',
          power: '836 HP',
          topSpeed: '322 km/h',
          acceleration: '0-100 km/h in 3.6s',
          transmission: '6-Speed Manual'
        },
        features: ['One-Off', 'Manual Transmission', 'Track-Only', 'Heritage Design'],
        year: 2023,
        color: 'Aston Martin Green'
      },
      {
        id: 'aston-dbx',
        name: 'DBX707',
        brand: 'Aston Martin',
        price: 28000000,
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
        description: 'The world\'s most beautiful SUV.',
        specifications: {
          engine: '4.0L Twin-Turbo V8',
          power: '697 HP',
          topSpeed: '310 km/h',
          acceleration: '0-100 km/h in 3.3s',
          transmission: '9-Speed Automatic'
        },
        features: ['Luxury SUV', 'All-Wheel Drive', 'Air Suspension', 'Premium Interior'],
        year: 2023,
        color: 'Q Sage Green'
      },
      {
        id: 'aston-rapide',
        name: 'Rapide E',
        brand: 'Aston Martin',
        price: 32000000,
        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop',
        description: 'Electric four-door grand tourer.',
        specifications: {
          engine: 'Dual Electric Motors',
          power: '601 HP',
          topSpeed: '250 km/h',
          acceleration: '0-100 km/h in 4.0s',
          transmission: 'Single-Speed'
        },
        features: ['Full Electric', 'Four Doors', 'Grand Touring', 'Sustainable Luxury'],
        year: 2023,
        color: 'Midnight Blue'
      },
      {
        id: 'aston-vanquish',
        name: 'Vanquish',
        brand: 'Aston Martin',
        price: 35000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        description: 'The flagship grand tourer returns.',
        specifications: {
          engine: '5.2L Twin-Turbo V12',
          power: '715 HP',
          topSpeed: '344 km/h',
          acceleration: '0-100 km/h in 3.3s',
          transmission: '8-Speed Automatic'
        },
        features: ['Flagship Model', 'Carbon Fiber Body', 'Luxury Interior', 'V12 Power'],
        year: 2023,
        color: 'Onyx Black'
      },
      {
        id: 'aston-valhalla',
        name: 'Valhalla',
        brand: 'Aston Martin',
        price: 95000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        description: 'Mid-engine hybrid supercar.',
        specifications: {
          engine: '4.0L Twin-Turbo V8 Hybrid',
          power: '937 HP',
          topSpeed: '350 km/h',
          acceleration: '0-100 km/h in 2.5s',
          transmission: '8-Speed Dual-Clutch'
        },
        features: ['Mid-Engine', 'Hybrid Technology', 'F1 Inspired', 'Carbon Construction'],
        year: 2023,
        color: 'Lime Essence'
      },
      {
        id: 'aston-one77',
        name: 'One-77',
        brand: 'Aston Martin',
        price: 450000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'Ultra-exclusive limited production supercar.',
        specifications: {
          engine: '7.3L Naturally Aspirated V12',
          power: '750 HP',
          topSpeed: '354 km/h',
          acceleration: '0-100 km/h in 3.7s',
          transmission: '6-Speed Sequential'
        },
        features: ['Limited to 77 Units', 'Carbon Monocoque', 'Hand-Built', 'Ultimate Exclusivity'],
        year: 2023,
        color: 'Concours Blue'
      }
    ]
  },
  {
    id: 'koenigsegg',
    name: 'Koenigsegg',
    logo: '👑',
    description: 'Swedish luxury hypercar manufacturer',
    cars: [
      {
        id: 'koenigsegg-jesko',
        name: 'Jesko Absolut',
        brand: 'Koenigsegg',
        price: 380000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'The fastest Koenigsegg ever created.',
        specifications: {
          engine: '5.0L Twin-Turbo V8',
          power: '1578 HP',
          topSpeed: '531 km/h',
          acceleration: '0-100 km/h in 2.5s',
          transmission: '9-Speed LST'
        },
        features: ['Low-Drag Design', 'Active Aerodynamics', 'Carbon Monocoque', 'Track Focus'],
        year: 2023,
        color: 'Jesko Orange'
      },
      {
        id: 'koenigsegg-regera',
        name: 'Regera',
        brand: 'Koenigsegg',
        price: 280000000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        description: 'Revolutionary hybrid drivetrain technology.',
        specifications: {
          engine: '5.0L Twin-Turbo V8 Hybrid',
          power: '1479 HP',
          topSpeed: '410 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: 'Direct Drive'
        },
        features: ['No Gearbox', 'Electric Torque Fill', 'Revolutionary Design', 'Luxury Interior'],
        year: 2023,
        color: 'Regera Blue'
      },
      {
        id: 'koenigsegg-gemera',
        name: 'Gemera',
        brand: 'Koenigsegg',
        price: 220000000,
        image: 'https://images.unsplash.com/photo-1627454820516-d0e5cf5b3c02?w=800&h=600&fit=crop',
        description: 'Four-seat hybrid grand tourer.',
        specifications: {
          engine: '2.0L Twin-Turbo I3 Hybrid',
          power: '1677 HP',
          topSpeed: '400 km/h',
          acceleration: '0-100 km/h in 1.9s',
          transmission: 'Direct Drive'
        },
        features: ['Four Seats', 'Hybrid Technology', 'Grand Touring', 'Revolutionary Power'],
        year: 2023,
        color: 'Dark Green'
      },
      {
        id: 'koenigsegg-cc850',
        name: 'CC850',
        brand: 'Koenigsegg',
        price: 420000000,
        image: 'https://images.unsplash.com/photo-1614026480102-e1501d53b94d?w=800&h=600&fit=crop',
        description: 'Tribute to the legendary CCR with modern technology.',
        specifications: {
          engine: '5.0L Twin-Turbo V8',
          power: '1385 HP',
          topSpeed: '450 km/h',
          acceleration: '0-100 km/h in 2.7s',
          transmission: 'Engage Shift System'
        },
        features: ['Heritage Design', 'Modern Technology', 'Unique Transmission', 'Carbon Construction'],
        year: 2023,
        color: 'Nordic Gold'
      },
      {
        id: 'koenigsegg-agera',
        name: 'Agera RS',
        brand: 'Koenigsegg',
        price: 350000000,
        image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop',
        description: 'Former world land speed record holder.',
        specifications: {
          engine: '5.0L Twin-Turbo V8',
          power: '1340 HP',
          topSpeed: '447 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '7-Speed Automatic'
        },
        features: ['Record Breaker', 'Active Aerodynamics', 'Lightweight Carbon', 'Track Proven'],
        year: 2023,
        color: 'Clear Carbon'
      },
      {
        id: 'koenigsegg-one1',
        name: 'One:1',
        brand: 'Koenigsegg',
        price: 650000000,
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
        description: 'The world\'s first megacar.',
        specifications: {
          engine: '5.0L Twin-Turbo V8',
          power: '1340 HP',
          topSpeed: '440 km/h',
          acceleration: '0-100 km/h in 2.8s',
          transmission: '7-Speed Automatic'
        },
        features: ['1:1 Power-to-Weight', 'Track-Only Focus', 'Active Aerodynamics', 'Ultra-Limited'],
        year: 2023,
        color: 'Exposed Carbon'
      },
      {
        id: 'koenigsegg-ccxr',
        name: 'CCXR Edition',
        brand: 'Koenigsegg',
        price: 180000000,
        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop',
        description: 'Environmental supercar with ethanol fuel.',
        specifications: {
          engine: '4.8L Supercharged V8',
          power: '1018 HP',
          topSpeed: '402 km/h',
          acceleration: '0-100 km/h in 3.2s',
          transmission: '6-Speed Manual'
        },
        features: ['Ethanol E85 Fuel', 'Environmental Focus', 'Supercharged V8', 'Classic Design'],
        year: 2023,
        color: 'Arctic White'
      },
      {
        id: 'koenigsegg-ccr',
        name: 'CCR Evolution',
        brand: 'Koenigsegg',
        price: 160000000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        description: 'The car that established Koenigsegg.',
        specifications: {
          engine: '4.6L Supercharged V8',
          power: '806 HP',
          topSpeed: '387 km/h',
          acceleration: '0-100 km/h in 3.6s',
          transmission: '6-Speed Manual'
        },
        features: ['Heritage Model', 'Supercharged Power', 'Manual Transmission', 'Swedish Engineering'],
        year: 2023,
        color: 'Guards Yellow'
      },
      {
        id: 'koenigsegg-trevita',
        name: 'CCXR Trevita',
        brand: 'Koenigsegg',
        price: 950000000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        description: 'Diamond-weave carbon fiber bodywork.',
        specifications: {
          engine: '4.8L Supercharged V8',
          power: '1018 HP',
          topSpeed: '402 km/h',
          acceleration: '0-100 km/h in 3.2s',
          transmission: '6-Speed Manual'
        },
        features: ['Diamond Carbon Fiber', 'Ultra-Exclusive', 'Only 2 Made', 'Ultimate Rarity'],
        year: 2023,
        color: 'Diamond Weave Silver'
      },
      {
        id: 'koenigsegg-ghost',
        name: 'Ghost Package',
        brand: 'Koenigsegg',
        price: 480000000,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
        description: 'Track-focused aerodynamic package.',
        specifications: {
          engine: '5.0L Twin-Turbo V8',
          power: '1578 HP',
          topSpeed: '300 km/h',
          acceleration: '0-100 km/h in 2.3s',
          transmission: '9-Speed LST'
        },
        features: ['Extreme Downforce', 'Track-Only', 'Active Aerodynamics', 'Ultimate Performance'],
        year: 2023,
        color: 'Ghost Silver'
      }
    ]
  }
];
