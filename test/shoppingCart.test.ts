import { addItemToCart } from "../tasks/shoppingCart";
import { calculateTotal } from "../tasks/shoppingCart";

test("Check add item's to cart", () => {
  expect(
    addItemToCart(
      [
        { id: 1, name: "Apple", price: 1.5, quantity: 2 },
        { id: 2, name: "Banana", price: 0.75, quantity: 4 },
      ],
      { id: 1, name: "Apple", price: 1.5, quantity: 2 }
    )
  ).toStrictEqual([
    { id: 1, name: "Apple", price: 1.5, quantity: 3 },
    { id: 2, name: "Banana", price: 0.75, quantity: 4 },
  ]);
});

test("Check add item's to cart", () => {
  expect(
    addItemToCart(
      [
        { id: 1, name: "Apple", price: 1.5, quantity: 2 },
        { id: 2, name: "Banana", price: 0.75, quantity: 4 },
      ],
      { id: -1, name: "Apple", price: 1.5, quantity: 2 }
    )
  ).toStrictEqual("incorrect id");
});

test("Check add item's to cart", () => {
  expect(
    addItemToCart(
      [
        { id: 1, name: "Apple", price: 1.5, quantity: 2 },
        { id: 2, name: "Banana", price: 0.75, quantity: 4 },
      ],
      { id: 1, name: "Apple", price: -1.5, quantity: 2 }
    )
  ).toStrictEqual("incorrect price");
});

test("Check add item's to cart", () => {
  expect(
    addItemToCart(
      [
        { id: 1, name: "Apple", price: 1.5, quantity: 2 },
        { id: 2, name: "Banana", price: 0.75, quantity: 4 },
      ],
      { id: 1, name: "Apple", price: 1.5, quantity: -2 }
    )
  ).toStrictEqual("incorrect quantity");
});

test("Check add item's to cart", () => {
  expect(
    addItemToCart(
      [
        { id: 1, name: "Apple", price: 1.5, quantity: 2 },
        { id: 2, name: "Banana", price: 0.75, quantity: 4 },
      ],
      { id: 3, name: "Mango", price: 2.5, quantity: 5 }
    )
  ).toStrictEqual([
    { id: 1, name: "Apple", price: 1.5, quantity: 2 },
    { id: 2, name: "Banana", price: 0.75, quantity: 4 },
    { id: 3, name: "Mango", price: 2.5, quantity: 5 },
  ]);
});

test("Price of all cart items", () => {
  expect(
    calculateTotal([
      { id: 1, name: "Apple", price: 1.5, quantity: 2 },
      { id: 2, name: "Banana", price: 0.75, quantity: 4 },
    ])
  ).toStrictEqual(6);
});

test("Price of all cart items", () => {
  expect(
    calculateTotal([
      { id: 1, name: "Apple", price: 1.5, quantity: 2 },
      { id: 2, name: "Banana", price: 0.75, quantity: 4 },
      { id: 3, name: "Mango", price: 2.5, quantity: 5 },
    ])
  ).toStrictEqual(18.5);
});
