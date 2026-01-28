import {                 
  getAllProducts,
  searchProducts,
  getProductsByCategory
} from "./product.js";

import {
  addToCart,
  getCartItems,
  getCartTotal,
  updateQuantity,
  removeFromCart
} from "./cart.js";

import { processPayment } from "./payment.js";

console.log("=== E-Commerce Store ===");

console.log("\nAll Products:");//display all products
console.log(getAllProducts());

console.log("\nSearch 'phone':");//display search results
console.log(searchProducts("phone"));

console.log("\nAdding to Cart:");//add items to cart
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

console.log("\nCart Items:");//display cart items
console.log(getCartItems());
console.log("Total:", getCartTotal());

console.log(updateQuantity(1, 2));//update quantity
console.log(removeFromCart(3));

console.log("\nCheckout:");
console.log(processPayment("upi", "WELCOME10"));
