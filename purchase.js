let products = [
  { id: 1, name: "Laptop", stock: 5, price: 1000 },
  { id: 2, name: "Phone", stock: 10, price: 500 },
];

function purchaseProduct(productId, quantity) {
  if (!productId || !quantity || quantity <= 0) {
    return { success: false, message: "Invalid input" };
  }

  const product = products.find(p => p.id === productId);
  if (!product) {
    return { success: false, message: "Product not found" };
  }

  if (product.stock < quantity) {
    return { success: false, message: "Insufficient stock" };
  }

  product.stock -= quantity;
  return { success: true, message: `Purchased ${quantity} ${product.name}(s)` };
}

function resetProducts() {
  products.length = 0; 

  products.push(
    { id: 1, name: "Laptop", stock: 5, price: 1000 },
    { id: 2, name: "Phone", stock: 10, price: 500 }
  );
}

module.exports = { purchaseProduct, resetProducts, products };
