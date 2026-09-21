// Mock product data based on the 5 business lines of Pet&Play
export const products = [
  {
    id: 'p1',
    title: 'Spray Antipulgas Avanzado',
    description: 'Protección completa contra pulgas y garrapatas para perros y gatos.',
    price: 250.00,
    category: 'antipulgas',
    categoryName: 'Antipulgas y garrapatas',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p2',
    title: 'Collar Repelente',
    description: 'Collar ajustable con duración de hasta 6 meses contra garrapatas.',
    price: 380.00,
    category: 'antipulgas',
    categoryName: 'Antipulgas y garrapatas',
    image: 'https://images.unsplash.com/photo-1623903088094-11e2f814b74e?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p3',
    title: 'Shampoo de Avena',
    description: 'Shampoo hipoalergénico para mascotas con piel sensible.',
    price: 180.00,
    category: 'belleza',
    categoryName: 'Belleza e higiene',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p4',
    title: 'Cepillo Deslanador',
    description: 'Herramienta profesional para remover el pelo muerto y cuidar el pelaje.',
    price: 220.00,
    category: 'belleza',
    categoryName: 'Belleza e higiene',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p5',
    title: 'Arena Aglutinante',
    description: 'Arena con control de olores y máxima absorción.',
    price: 290.00,
    category: 'gatos',
    categoryName: 'Gatos',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p6',
    title: 'Rascador Torre',
    description: 'Torre de 3 niveles para que tu gato juegue y descanse.',
    price: 850.00,
    category: 'gatos',
    categoryName: 'Gatos',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p7',
    title: 'Cama Ortopédica',
    description: 'Cama suave y resistente con soporte ortopédico para el hogar.',
    price: 950.00,
    category: 'hogar',
    categoryName: 'Hogar',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p8',
    title: 'Suplemento Ganadero',
    description: 'Suplemento vitamínico de alto rendimiento para ganado.',
    price: 1200.00,
    category: 'pecuario',
    categoryName: 'Pecuario',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'antipulgas', name: 'Antipulgas y garrapatas' },
  { id: 'belleza', name: 'Belleza e higiene' },
  { id: 'gatos', name: 'Gatos' },
  { id: 'hogar', name: 'Hogar' },
  { id: 'pecuario', name: 'Pecuario' }
];
