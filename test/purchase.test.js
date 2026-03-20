const { purchaseProduct, resetProducts, products } = require('../purchase');

beforeEach(() => resetProducts());

describe("Product Purchase Tests", () => {

  test("P1: Purchase product successfully", () => {
    const result = purchaseProduct(1, 2);
    expect(result).toEqual({ success: true, message: "Purchased 2 Laptop(s)" });
    expect(products.find(p => p.id === 1).stock).toBe(3);
  });

  test("P2: Purchase quantity > stock fails", () => {
    const result = purchaseProduct(1, 10);
    expect(result).toEqual({ success: false, message: "Insufficient stock" });
  });

  test("P3: Purchase non-existent product fails", () => {
    const result = purchaseProduct(999, 1);
    expect(result).toEqual({ success: false, message: "Product not found" });
  });

});