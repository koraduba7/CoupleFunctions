type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export function addItemToCart(
  cart: CartItem[],
  item: CartItem
): CartItem[] | string {
  if (item.id <= 0) return "incorrect id";
  if (item.price <= 0) return "incorrect price";
  if (item.quantity <= 0) return "incorrect quantity";
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id) {
      cart[i].quantity++;
      return cart;
    }
  }
  cart.push(item);
  console.log(cart);
  return cart;
}

export function calculateTotal(cart: CartItem[]): number {
  let sum: number = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price * cart[i].quantity;
  }
  return sum;
}
