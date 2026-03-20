const { createUser, getUser, updateUser, deleteUser, resetUsers } = require('../crud');

beforeEach(() => resetUsers());

describe("CRUD Operations Tests", () => {

  test("C1: Create user successfully", () => {
    const user = { id: 1, name: "Aniruddha" };
    expect(createUser(user)).toEqual(user);
  });

  test("R2: Get non-existent user returns null", () => {
    expect(getUser(999)).toBeNull();
  });

  test("U3: Partial update adds new field", () => {
    createUser({ id: 2, name: "Bob" });
    const updated = updateUser(2, { age: 30 });
    expect(updated.age).toBe(30);
  });

  test("D1: Delete existing user successfully", () => {
    createUser({ id: 3, name: "Charlie" });
    expect(deleteUser(3)).toBe(true);
  });

});