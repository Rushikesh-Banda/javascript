import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

function generateOrderId() {
  return "ORD" + Date.now();
}

export function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  const discountInfo = couponCode
    ? applyDiscount(subtotal, couponCode, items)
    : { discount: 0, finalTotal: subtotal };

  items.forEach(item => reduceStock(item.id, item.qty));
  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountInfo.discount,
    total: discountInfo.finalTotal,
    paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}
