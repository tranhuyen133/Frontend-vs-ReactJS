import React from "react";
import { Card, Button } from "antd";

interface CartProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

// Component Cart (một thẻ sản phẩm)
const Cart: React.FC<CartProps> = ({ title, description, price, image }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: "10px" }}
      cover={<img alt={title} src={image} />}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Button type="primary">Xem chi tiết</Button>
        <span style={{ fontWeight: "bold" }}>{price}</span>
      </div>
    </Card>
  );
};

// Component hiển thị danh sách Cart
const CartList: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
      <Cart
        title="MacBook Air 2018"
        description="The reason I am selling the machine is because it is too much power for what I need"
        price="30.000.000 đ"
        image="https://cdn.tgdd.vn/Products/Images/44/226450/Slider/vi-vn-macbook-air-2018-1.jpg"
      />
      <Cart
        title="MacBook Pro 2019"
        description="The reason I am selling the machine is because it is too much power for what I need"
        price="30.000.000 đ"
        image="https://cdn.tgdd.vn/Products/Images/44/210066/Slider/vi-vn-macbook-pro-2019-1.jpg"
      />
    </div>
  );
};

export default CartList;
