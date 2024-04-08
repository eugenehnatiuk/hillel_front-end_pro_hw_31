const productList = [
  {
    id: 1,
    category: 'pizza',
    name: 'Papperoni',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [300, 420],
    image: '/images/prod_list/papperoni_1.jpg',
    composition: {
      energy: '2100 kJ (500 kcal)',
      fat: '22 g',
      carbohydrates: '60 g',
      protein: '20 g',
      ingredients: [
        'dough',
        'tomato sauce',
        'mozzarella cheese',
        'pepperoni',
        'herbs',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  {
    id: 2,
    category: 'pizza',
    name: 'Margarita',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [250, 300],
    image: '/images/prod_list/margarita_1.jpg',
    composition: {
      energy: '1800 kJ (430 kcal)',
      fat: '18 g',
      carbohydrates: '50 g',
      protein: '15 g',
      ingredients: ['dough', 'tomato sauce', 'mozzarella cheese', 'basil'],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  {
    id: 3,
    category: 'pizza',
    name: 'Hawaiian',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [280, 350],
    image: '/images/prod_list/Hawaiian_1.jpg',
    composition: {
      energy: '1900 kJ (450 kcal)',
      fat: '20 g',
      carbohydrates: '55 g',
      protein: '18 g',
      ingredients: [
        'dough',
        'tomato sauce',
        'mozzarella cheese',
        'ham',
        'pineapple',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: false,
  },
  {
    id: 4,
    category: 'pizza',
    name: 'BBQ Chicken',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [320, 400],
    image: '/images/prod_list/BBQ _Chicken_1.jpg',
    composition: {
      energy: '2200 kJ (520 kcal)',
      fat: '24 g',
      carbohydrates: '65 g',
      protein: '22 g',
      ingredients: [
        'dough',
        'BBQ sauce',
        'mozzarella cheese',
        'chicken',
        'onions',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  {
    id: 5,
    category: 'pizza',
    name: 'Vegetarian',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [270, 350],
    image: '/images/prod_list/Vegetarian_1.webp',
    composition: {
      energy: '2000 kJ (480 kcal)',
      fat: '20 g',
      carbohydrates: '60 g',
      protein: '15 g',
      ingredients: [
        'dough',
        'tomato sauce',
        'mozzarella cheese',
        'bell peppers',
        'olives',
        'onions',
        'mushrooms',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  {
    id: 6,
    category: 'pizza',
    name: 'Meat Lover',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [330, 420],
    image: '/images/prod_list/Meat_Lover_1.jpeg',
    composition: {
      energy: '2300 kJ (550 kcal)',
      fat: '26 g',
      carbohydrates: '70 g',
      protein: '24 g',
      ingredients: [
        'dough',
        'tomato sauce',
        'mozzarella cheese',
        'sausage',
        'bacon',
        'pepperoni',
        'ham',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  {
    id: 7,
    category: 'pizza',
    name: 'Four Cheese',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [290, 360],
    image: '/images/prod_list/Four_Cheese_1.jpg',
    composition: {
      energy: '1900 kJ (460 kcal)',
      fat: '22 g',
      carbohydrates: '55 g',
      protein: '20 g',
      ingredients: [
        'dough',
        'tomato sauce',
        'mozzarella cheese',
        'cheddar cheese',
        'parmesan cheese',
        'gorgonzola cheese',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  {
    id: 8,
    category: 'pizza',
    name: 'Buffalo Chicken',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [320, 400],
    image: '/images/prod_list/Buffalo_Chicken_1.jpg',
    composition: {
      energy: '2200 kJ (530 kcal)',
      fat: '24 g',
      carbohydrates: '65 g',
      protein: '23 g',
      ingredients: [
        'dough',
        'Buffalo sauce',
        'mozzarella cheese',
        'chicken',
        'red onions',
        'green onions',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  {
    id: 9,
    category: 'pizza',
    name: 'Supreme',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [340, 430],
    image: '/images/prod_list/Supreme_1.jpg',
    composition: {
      energy: '2400 kJ (570 kcal)',
      fat: '28 g',
      carbohydrates: '75 g',
      protein: '25 g',
      ingredients: [
        'dough',
        'tomato sauce',
        'mozzarella cheese',
        'pepperoni',
        'sausage',
        'green peppers',
        'onions',
        'black olives',
        'mushrooms',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  {
    id: 10,
    category: 'pizza',
    name: 'Taco',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [300, 370],
    image: '/images/prod_list/Taco_1.jpg',
    composition: {
      energy: '2000 kJ (480 kcal)',
      fat: '22 g',
      carbohydrates: '60 g',
      protein: '20 g',
      ingredients: [
        'dough',
        'tomato sauce',
        'mozzarella cheese',
        'ground beef',
        'lettuce',
        'tomato',
        'cheddar cheese',
        'taco seasoning',
      ],
      allergens: ['gluten', 'milk'],
    },
    isActive: true,
  },
  // Drinks
  {
    id: 11,
    category: 'drinks',
    name: 'Coca-Cola',
    sizes: [
      { size: 'S', value: 'Small (330ml)' },
      { size: 'L', value: 'Large (500ml)' },
    ],
    prices: [30, 50],
    image: '/images/prod_list/cola_1.webp',
    composition: {
      energy: '180 kJ (42 kcal)',
      fat: '0 g',
      carbohydrates: '10.6 g',
      protein: '0 g',
      ingredients: [
        'carbonated water',
        'sugar',
        'caffeine',
        'phosphoric acid',
        'natural flavors',
      ],
      allergens: [],
    },
    isActive: true,
  },
  {
    id: 12,
    category: 'drinks',
    name: 'Fanta',
    sizes: [
      { size: 'S', value: 'Small (330ml)' },
      { size: 'L', value: 'Large (500ml)' },
    ],
    prices: [30, 50],
    image: '/images/prod_list/fanta_1.jpg',
    composition: {
      energy: '180 kJ (42 kcal)',
      fat: '0 g',
      carbohydrates: '10.4 g',
      protein: '0 g',
      ingredients: [
        'carbonated water',
        'sugar',
        'orange juice',
        'citric acid',
        'natural flavors',
      ],
      allergens: [],
    },
    isActive: true,
  },
  {
    id: 13,
    category: 'drinks',
    name: 'Sprite',
    sizes: [
      { size: 'S', value: 'Small (330ml)' },
      { size: 'L', value: 'Large (500ml)' },
    ],
    prices: [30, 50],
    image: '/images/prod_list/sprite_1.png',
    composition: {
      energy: '160 kJ (38 kcal)',
      fat: '0 g',
      carbohydrates: '9.8 g',
      protein: '0 g',
      ingredients: [
        'carbonated water',
        'sugar',
        'citric acid',
        'natural lemon-lime flavors',
      ],
      allergens: [],
    },
    isActive: true,
  },
  {
    id: 14,
    category: 'drinks',
    name: 'Lemonade',
    sizes: [
      { size: 'S', value: 'Small (330ml)' },
      { size: 'L', value: 'Large (500ml)' },
    ],
    prices: [25, 40],
    image: '/images/prod_list/Lemonade_1.jpg',
    composition: {
      energy: '160 kJ (38 kcal)',
      fat: '0 g',
      carbohydrates: '9.5 g',
      protein: '0 g',
      ingredients: ['water', 'sugar', 'lemon juice', 'lemon zest'],
      allergens: [],
    },
    isActive: true,
  },
  {
    id: 15,
    category: 'drinks',
    name: 'Orange Juice',
    sizes: [
      { size: 'S', value: 'Small (250ml)' },
      { size: 'L', value: 'Large (500ml)' },
    ],
    prices: [40, 80],
    image: '/images/prod_list/OrangeJuice_1.jpg',
    composition: {
      energy: '160 kJ (38 kcal)',
      fat: '0 g',
      carbohydrates: '9 g',
      protein: '0.7 g',
      ingredients: ['orange juice', 'water', 'sugar'],
      allergens: [],
    },
    isActive: true,
  },
  {
    id: 16,
    category: 'drinks',
    name: 'Iced Tea',
    sizes: [
      { size: 'S', value: 'Small (250ml)' },
      { size: 'L', value: 'Large (500ml)' },
    ],
    prices: [45, 60],
    image: '/images/prod_list/IcedTea_1.jpg',
    composition: {
      energy: '80 kJ (19 kcal)',
      fat: '0 g',
      carbohydrates: '4.8 g',
      protein: '0 g',
      ingredients: ['tea', 'water', 'sugar', 'lemon juice'],
      allergens: [],
    },
    isActive: true,
  },
];

export default productList;
