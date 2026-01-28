import { getProductById, checkStock } from "./product.js";

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }

  const existingItem = cartItems.find(i => i.productId === productId);

  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    cartItems.push({ productId, qty: quantity });
  }

  return "Item added to cart";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed from cart";
}

export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "Stock limit exceeded";
  }

  cartItems = cartItems.map(item =>
    item.productId === productId
      ? { ...item, qty: newQuantity }
      : item
  );

  return "Quantity updated";
}

export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      qty: item.qty,
      total: product.price * item.qty
    };
  });
}

export function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}

export function clearCart() {
  cartItems = [];
}
