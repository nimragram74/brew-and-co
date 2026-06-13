export type MenuItem = {
  category: string;
  name: string;
  description: string;
  price: number;
  popular: boolean;
  image: string;
};

export const menuItems: MenuItem[] = [
  // Coffee
  { category: "Coffee", name: "Espresso", description: "Rich and bold single shot of our house blend", price: 3.50, popular: false, image: "/espresso.webp" },
  { category: "Coffee", name: "Double Espresso", description: "Two shots of our signature espresso blend", price: 4.00, popular: false, image: "/double-espresso.webp" },
  { category: "Coffee", name: "Flat White", description: "Velvety microfoam milk with a double ristretto", price: 4.50, popular: true, image: "/flat-white.webp" },
  { category: "Coffee", name: "Cappuccino", description: "Equal parts espresso, steamed milk and thick foam", price: 4.50, popular: true, image: "/cappuccino.webp" },
  { category: "Coffee", name: "Latte", description: "Smooth espresso with silky steamed milk", price: 4.75, popular: true, image: "/latte.webp" },
  { category: "Coffee", name: "Cortado", description: "Equal parts espresso and warm milk to reduce acidity", price: 4.00, popular: false, image: "/cortado.webp" },
  { category: "Coffee", name: "Cold Brew", description: "Slow-steeped for 18 hours for a smooth finish", price: 5.00, popular: true, image: "/cold-brew.webp" },
  { category: "Coffee", name: "Oat Milk Latte", description: "Our classic latte made with creamy oat milk", price: 5.25, popular: true, image: "/oat-latte.webp" },
  // Tea
  { category: "Tea", name: "English Breakfast", description: "Classic full-bodied black tea with milk", price: 3.50, popular: false, image: "/english-breakfast.webp" },
  { category: "Tea", name: "Earl Grey", description: "Fragrant black tea with bergamot orange", price: 3.50, popular: false, image: "/earl-grey.webp" },
  { category: "Tea", name: "Matcha Latte", description: "Ceremonial grade matcha with steamed oat milk", price: 5.50, popular: true, image: "/matcha-latte.webp" },
  { category: "Tea", name: "Chamomile", description: "Soothing floral herbal tea", price: 3.25, popular: false, image: "/chamomile.webp" },
  // Pastries
  { category: "Pastries", name: "Butter Croissant", description: "Flaky and golden baked fresh every morning", price: 3.75, popular: true, image: "/butter-croissant.webp" },
  { category: "Pastries", name: "Almond Croissant", description: "Buttery croissant filled with almond cream", price: 4.25, popular: true, image: "/almond-croissant.webp" },
  { category: "Pastries", name: "Blueberry Muffin", description: "Bursting with fresh blueberries and a crumbly top", price: 3.50, popular: false, image: "/blueberry-muffin.webp" },
  { category: "Pastries", name: "Banana Bread", description: "Moist and lightly spiced banana loaf", price: 3.75, popular: true, image: "/banana-bread.webp" },
  { category: "Pastries", name: "Cinnamon Roll", description: "Soft and gooey with a vanilla cream cheese glaze", price: 4.50, popular: true, image: "/cinnamon-roll.webp" },
  // Light Lunch
  { category: "Light Lunch", name: "Avocado Toast", description: "Sourdough with smashed avocado, chilli flakes and lemon", price: 9.00, popular: true, image: "/avocado-toast.webp" },
  { category: "Light Lunch", name: "Smoked Salmon Bagel", description: "Cream cheese, smoked salmon, capers and red onion", price: 11.50, popular: true, image: "/salmon-bagel.webp" },
  { category: "Light Lunch", name: "Chicken Pesto Panini", description: "Grilled chicken, sun-dried tomatoes and basil pesto", price: 10.00, popular: false, image: "/chicken-panini.webp" },
  { category: "Light Lunch", name: "Tomato Soup", description: "Roasted tomato and basil soup served with sourdough", price: 8.50, popular: false, image: "/tomato-soup.webp" },
  { category: "Light Lunch", name: "Caesar Salad", description: "Romaine, parmesan, croutons and house Caesar dressing", price: 9.50, popular: false, image: "/caesar-salad.webp" },
  // Extras
  { category: "Extras", name: "Extra Shot", description: "Add an extra espresso shot to any drink", price: 0.75, popular: false, image: "/espresso.webp" },
  { category: "Extras", name: "Oat Milk Swap", description: "Swap to oat, almond or soy milk", price: 0.50, popular: false, image: "/oat-latte.webp" },
  { category: "Extras", name: "Vanilla Syrup", description: "Add a pump of house-made vanilla syrup", price: 0.50, popular: false, image: "/latte.webp" },
];

export const categories = ["All", ...Array.from(new Set(menuItems.map(i => i.category)))];

export const popularItems = menuItems.filter(i => i.popular).slice(0, 6);
