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
    image:
      'https://lviv.veteranopizza.com/image/cache/catalog/pizza/peperoni-800x800.jpg',
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
    image:
      'https://img.sunset02.com/sites/default/files/image/recipes/su/10/02/pizzetta-margherita-pizza-su-x.jpg',
    composition: {
      energy: '1800 kJ (430 kcal)',
      fat: '18 g',
      carbohydrates: '50 g',
      protein: '15 g',
      ingredients: ['dough', 'tomato sauce', 'mozzarella cheese', 'basil'],
      allergens: ['gluten', 'milk'],
    },
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
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EW9SMdc42JsNGoGllE0R7OWmo2F2JIubsQ&usqp=CAU',
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
    image:
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2Farchive%2Fbd84ba2c08f32a70c1c3638c511dd271d365c611',
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
    image:
      'https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg',
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
    image:
      'https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/781180/pictures/large_meat-lovers-pizza.jpeg',
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
    image:
      'https://au.gozney.com/cdn/shop/articles/Four_Cheese_Pizza_Feng_Chen_-_Large1.jpg?v=1696535135',
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
    image:
      'https://thecozycook.com/wp-content/uploads/2023/08/Buffalo-Chicken-Pizza.jpg',
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
    image:
      'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg',
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
    image:
      'https://suebeehomemaker.com/wp-content/uploads/2023/09/Godfathers-taco-pizza-recipecard.jpg',
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
    image:
      'https://assets-global.website-files.com/63d3e0aead95e54ffdce9095/63f595ed207f7c82a1a8d440_coca-cola%20(1).webp',
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
    image:
      'https://static.dezeen.com/uploads/2023/04/fanta-rebrand-global-identity-coca-cola-jones-knowles-ritchie_dezeen_2364_col_20.jpg',
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
    image:
      'https://hips.hearstapps.com/hmg-prod/images/sprite-6401deca78a0d.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
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
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKccAKio584Nxpuk3pfBUlBMXNjPfQgbvzXRlM0HT-1Q&s',
    composition: {
      energy: '160 kJ (38 kcal)',
      fat: '0 g',
      carbohydrates: '9.5 g',
      protein: '0 g',
      ingredients: ['water', 'sugar', 'lemon juice', 'lemon zest'],
      allergens: [],
    },
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
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2Z3x0hoi9g1WrC0Ck-KgL-RE5c-aFtcquEkahvwTkQ&s',
    composition: {
      energy: '160 kJ (38 kcal)',
      fat: '0 g',
      carbohydrates: '9 g',
      protein: '0.7 g',
      ingredients: ['orange juice', 'water', 'sugar'],
      allergens: [],
    },
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
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6CudLDjWKp3tmuZT0uipZFuTiaUBWJ5cymL1oEoN_w&s',
    composition: {
      energy: '80 kJ (19 kcal)',
      fat: '0 g',
      carbohydrates: '4.8 g',
      protein: '0 g',
      ingredients: ['tea', 'water', 'sugar', 'lemon juice'],
      allergens: [],
    },
  },
];

export default productList;
