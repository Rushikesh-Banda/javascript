//assignment1
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
    theme: "dark",
    language: "en"
    }
};
const shallowCopyUser = { ...user };

shallowCopyUser.name = "Amit";
shallowCopyUser.preferences.theme = "light";
shallowCopyUser.preferences.language = "fr";
console.log("Original User:", user);

//assignment2
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

const shallowClone = (data) => {// Shallow clone function
  return { ...data };
};

const changeCityShallow = (orderData, newCity) => {//Update city
  const copy = shallowClone(orderData);
  copy.customer.address.city = newCity; // shared reference
  return copy;
};

const changeItemPriceShallow = (orderData, newPrice) => {
  const copy = shallowClone(orderData);
  copy.items[0].price = newPrice; // shared reference
  return copy;
};

const shallowCopiedOrder = shallowClone(order);

const cityUpdated = changeCityShallow(shallowCopiedOrder, "Bangalore");
const priceUpdated = changeItemPriceShallow(shallowCopiedOrder, 75000);

console.log("Original Order:", order);
console.log("Shallow Copy:", cityUpdated);
console.log("Price Updated Copy:", priceUpdated);




