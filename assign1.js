//assignment 1
let totalAmount = 0;

totalAmount = totalAmount + 500;
console.log(totalAmount); //  adding 500

totalAmount = totalAmount + 1200;
console.log(totalAmount); // adding 1200

totalAmount = totalAmount - 200;
console.log(totalAmount); // discount

let gstAmount = totalAmount * 0.18;
totalAmount = totalAmount + gstAmount;
console.log(totalAmount); //  GST

console.log("Final Bill Amount: ₹", totalAmount);// final bill amount




