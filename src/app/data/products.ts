export interface Product {
  slug: string;
  name: string;
  category: string;
  badge: string;
  shortDescription: string;
  longDescription: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  alt: string;
  tag: string;
  specs: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'sprint-pro-x1',
    name: 'Zapatillas Sprint Pro X1',
    category: 'Calzado',
    badge: 'Top ventas',
    shortDescription: 'Upper ligero, suela mixta y retorno de energía en ritmos medios-altos.',
    longDescription: 'Modelo polivalente para entrenamientos de 5K a media maratón. Espuma reactiva, estabilidad en apoyo y upper transpirable.',
    price: '129,95 €',
    rating: 4.8,
    reviews: 129,
    image: '/img/productos/Zapatillas Sprint Pro X1.jpg',
    alt: 'Zapatillas Sprint Pro X1',
    tag: 'Calzado running',
    specs: ['Drop: 8 mm', 'Pisada neutra', 'Suela mixta asfalto/pista', 'Upper transpirable']
  },
  {
    slug: 'aerodry',
    name: 'Camiseta técnica AeroDry',
    category: 'Textil',
    badge: 'Nuevo',
    shortDescription: 'Costuras planas, paneles de ventilación y corte ergonómico.',
    longDescription: 'Camiseta ligera con paneles de ventilación y secado rápido para entrenamientos intensos y competición.',
    price: '34,90 €',
    rating: 4.7,
    reviews: 84,
    image: '/img/productos/Camiseta técnica AeroDry.jpg',
    alt: 'Camiseta técnica AeroDry',
    tag: 'Textil técnico',
    specs: ['Tejido: poliéster técnico', 'Ajuste: regular fit', 'Costuras planas', 'Uso: running y pista']
  },
  {
    slug: 'pace-3',
    name: 'Reloj GPS Pace 3',
    category: 'Accesorios',
    badge: 'Pro',
    shortDescription: 'Métricas en tiempo real, VO2 estimado y entrenamiento por zonas.',
    longDescription: 'Reloj multideporte para controlar ritmo, pulsaciones y sesiones por intervalos con seguimiento de actividad diaria.',
    price: '199,00 €',
    rating: 4.9,
    reviews: 61,
    image: '/img/productos/Reloj GPS Pace 3.jpg',
    alt: 'Reloj GPS Pace 3',
    tag: 'Accesorio GPS',
    specs: ['Autonomía: hasta 7 días', 'GPS integrado', 'Resistencia al agua 5ATM', 'Entrenos por zonas']
  },
  {
    slug: 'recovery',
    name: 'Mallas compresivas Recovery',
    category: 'Textil',
    badge: 'Recomendado',
    shortDescription: 'Compresión gradual para entrenamientos largos y recuperación.',
    longDescription: 'Malla de compresión gradual pensada para reducir vibración muscular en sesiones largas y mejorar recuperación postentreno.',
    price: '59,90 €',
    rating: 4.6,
    reviews: 45,
    image: '/img/productos/Mallas compresivas Recovery.jpg',
    alt: 'Mallas compresivas Recovery',
    tag: 'Textil compresivo',
    specs: ['Compresión media', 'Cintura anatómica', 'Bolsillo lateral', 'Tejido transpirable']
  },
  {
    slug: 'hydrorun',
    name: 'Cinturón de hidratación HydroRun',
    category: 'Accesorios',
    badge: 'Esencial',
    shortDescription: 'Capacidad para dos bidones y bolsillo frontal para móvil.',
    longDescription: 'Cinturón ligero para tiradas largas con capacidad para dos bidones y bolsillo frontal para móvil o geles energéticos.',
    price: '27,50 €',
    rating: 4.5,
    reviews: 52,
    image: '/img/productos/Cinturón de hidratación HydroRun.jpg',
    alt: 'Cinturón de hidratación HydroRun',
    tag: 'Hidratación',
    specs: ['2 bidones incluidos', 'Ajuste regulable', 'Bolsillo frontal elástico', 'Tejido antirozaduras']
  },
  {
    slug: 'antiblister',
    name: 'Calcetines Anti-Blister',
    category: 'Accesorios',
    badge: 'Pack ahorro',
    shortDescription: 'Fibra técnica antirozaduras y refuerzo en metatarsos.',
    longDescription: 'Calcetines técnicos con refuerzo en metatarsos y talón para reducir fricción en entrenamientos y competición.',
    price: '12,90 €',
    rating: 4.7,
    reviews: 101,
    image: '/img/productos/Calcetines Anti-Blister.jpg',
    alt: 'Calcetines Anti-Blister',
    tag: 'Accesorio textil',
    specs: ['Pack de 2 pares', 'Compresión ligera', 'Tejido transpirable', 'Secado rápido']
  }
];
