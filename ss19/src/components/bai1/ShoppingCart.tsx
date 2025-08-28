import React, { useMemo } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const ShoppingCart: React.FC = () => {
  const cartItems: CartItem[] = [
    { id: 1, name: "Áo thun", price: 120000, quantity: 2 },
    { id: 2, name: "Quần jean", price: 350000, quantity: 1 },
    { id: 3, name: "Giày sneaker", price: 800000, quantity: 1 },
  ];

  // Dùng useMemo để tính tổng chỉ khi cartItems thay đổi
  const total = useMemo(() => {
    console.log("Đang tính toán lại tổng..."); // để bạn dễ quan sát
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Shopping Cart</h2>

      <ul className="divide-y">
        {cartItems.map((item) => (
          <li key={item.id} className="py-2 flex justify-between">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>{item.price.toLocaleString()}đ</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between font-bold text-lg">
        <span>Tổng cộng:</span>
        <span>{total.toLocaleString()}đ</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
