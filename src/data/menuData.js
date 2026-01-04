/**
 * Menu Data - Product Categories and Items
 * 
 * Contains all cafe menu items organized by categories
 * Categories are displayed in the order listed here
 */

export const categories = [
  { id: 'cafe', name: 'cafe' },           // ☕ Hot & Cold Coffee Drinks - FIRST
  { id: 'breakfast', name: 'break fast' }, // 🍳 Morning Meals
  { id: 'cake', name: 'cake' },           // 🎂 Cakes and Baked Goods
  { id: 'dessert', name: 'dessert' },     // 🍰 Sweet Treats
  { id: 'sandwich', name: 'sandwich' },   // 🥪 Sandwiches & Wraps
  { id: 'smoothie', name: 'smoothie' },   // 🥤 Smoothies & Shakes
  { id: 'pastry', name: 'pastry' },       // 🥐 Fresh Pastries
  { id: 'salad', name: 'salad' }          // 🥗 Fresh Salads
];

export const allProducts = [
  // ========== CAFE - Hot & Cold Coffee Drinks ==========
  {
    id: 1,
    category: 'cafe',
    name: 'latte',
    description: 'espresso + milk',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    category: 'cafe',
    name: 'espresso',
    description: '100% Arabica',
    price: '$2.50',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    category: 'cafe',
    name: 'cappuccino',
    description: 'espresso + foam',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    category: 'cafe',
    name: 'mocha',
    description: 'chocolate + coffee',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?w=400&h=400&fit=crop'
  },
  {
    id: 21,
    category: 'cafe',
    name: 'americano',
    description: 'smooth & strong',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop'
  },
  {
    id: 22,
    category: 'cafe',
    name: 'flat white',
    description: 'silky microfoam',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1568209865332-a15790aed756?w=400&h=400&fit=crop'
  },
  {
    id: 23,
    category: 'cafe',
    name: 'cortado',
    description: 'espresso + milk',
    price: '$3.75',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop'
  },
  // Breakfast
  {
    id: 5,
    category: 'breakfast',
    name: 'pancakes',
    description: 'fluffy & sweet',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    category: 'breakfast',
    name: 'omelette',
    description: 'eggs + cheese',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop'
  },
  {
    id: 7,
    category: 'breakfast',
    name: 'toast',
    description: 'avocado toast',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop'
  },
  {
    id: 24,
    category: 'breakfast',
    name: 'waffles',
    description: 'crispy & golden',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=400&h=400&fit=crop'
  },
  {
    id: 25,
    category: 'breakfast',
    name: 'french toast',
    description: 'cinnamon sugar',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop'
  },
  {
    id: 26,
    category: 'breakfast',
    name: 'bagel',
    description: 'cream cheese',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29f90?w=400&h=400&fit=crop'
  },
  // Cake
  {
    id: 8,
    category: 'cake',
    name: 'chocolate cake',
    description: 'rich & moist',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop'
  },
  {
    id: 9,
    category: 'cake',
    name: 'cheesecake',
    description: 'creamy delight',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=400&fit=crop'
  },
  {
    id: 10,
    category: 'cake',
    name: 'red velvet',
    description: 'classic favorite',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=400&fit=crop'
  },
  {
    id: 27,
    category: 'cake',
    name: 'carrot cake',
    description: 'cream cheese frosting',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop'
  },
  {
    id: 28,
    category: 'cake',
    name: 'lemon cake',
    description: 'tangy & sweet',
    price: '$5.25',
    image: 'https://images.unsplash.com/photo-1519915212116-715e4e9b2b0f?w=400&h=400&fit=crop'
  },
  {
    id: 29,
    category: 'cake',
    name: 'strawberry shortcake',
    description: 'fresh berries',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop'
  },
  // Dessert
  {
    id: 11,
    category: 'dessert',
    name: 'ice cream',
    description: 'vanilla classic',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop'
  },
  {
    id: 12,
    category: 'dessert',
    name: 'tiramisu',
    description: 'italian specialty',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop'
  },
  {
    id: 30,
    category: 'dessert',
    name: 'brownie',
    description: 'fudgy & rich',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=400&fit=crop'
  },
  {
    id: 31,
    category: 'dessert',
    name: 'panna cotta',
    description: 'creamy custard',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop'
  },
  {
    id: 32,
    category: 'dessert',
    name: 'creme brulee',
    description: 'caramelized top',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=400&fit=crop'
  },
  // Sandwich
  {
    id: 13,
    category: 'sandwich',
    name: 'club sandwich',
    description: 'triple decker',
    price: '$7.50',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop'
  },
  {
    id: 14,
    category: 'sandwich',
    name: 'croissant',
    description: 'ham & cheese',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop'
  },
  {
    id: 33,
    category: 'sandwich',
    name: 'grilled cheese',
    description: 'melted perfection',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&h=400&fit=crop'
  },
  {
    id: 34,
    category: 'sandwich',
    name: 'blt',
    description: 'bacon lettuce tomato',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1553909489-ec2175ef3ab2?w=400&h=400&fit=crop'
  },
  {
    id: 35,
    category: 'sandwich',
    name: 'turkey panini',
    description: 'pressed & toasted',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=400&fit=crop'
  },
  // Smoothie
  {
    id: 15,
    category: 'smoothie',
    name: 'berry blast',
    description: 'mixed berries',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop'
  },
  {
    id: 16,
    category: 'smoothie',
    name: 'mango magic',
    description: 'tropical vibes',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop'
  },
  {
    id: 36,
    category: 'smoothie',
    name: 'green detox',
    description: 'spinach & apple',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop'
  },
  {
    id: 37,
    category: 'smoothie',
    name: 'banana shake',
    description: 'creamy & sweet',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=400&fit=crop'
  },
  {
    id: 38,
    category: 'smoothie',
    name: 'acai bowl',
    description: 'topped with granola',
    price: '$7.50',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop'
  },
  // Pastry
  {
    id: 17,
    category: 'pastry',
    name: 'croissant',
    description: 'butter croissant',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop'
  },
  {
    id: 18,
    category: 'pastry',
    name: 'danish',
    description: 'fruit filled',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=400&fit=crop'
  },
  {
    id: 39,
    category: 'pastry',
    name: 'muffin',
    description: 'blueberry fresh',
    price: '$3.25',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop'
  },
  {
    id: 40,
    category: 'pastry',
    name: 'pain au chocolat',
    description: 'chocolate filled',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop'
  },
  {
    id: 41,
    category: 'pastry',
    name: 'eclair',
    description: 'cream filled',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1587241321921-91aaaa6c1c67?w=400&h=400&fit=crop'
  },
  // Salad
  {
    id: 19,
    category: 'salad',
    name: 'caesar salad',
    description: 'classic caesar',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop'
  },
  {
    id: 20,
    category: 'salad',
    name: 'greek salad',
    description: 'feta & olives',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop'
  },
  {
    id: 42,
    category: 'salad',
    name: 'caprese salad',
    description: 'tomato & mozzarella',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=400&fit=crop'
  },
  {
    id: 43,
    category: 'salad',
    name: 'cobb salad',
    description: 'chicken & avocado',
    price: '$8.50',
    image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=400&h=400&fit=crop'
  },
  {
    id: 44,
    category: 'salad',
    name: 'quinoa bowl',
    description: 'healthy & filling',
    price: '$7.50',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=400&fit=crop'
  }
];

export const suggestions = [
  {
    id: 1,
    name: 'cappuccino special',
    description: 'double shot espresso',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    name: 'chocolate cake',
    description: 'homemade recipe',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    name: 'club sandwich',
    description: 'fresh ingredients',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop'
  }
];
