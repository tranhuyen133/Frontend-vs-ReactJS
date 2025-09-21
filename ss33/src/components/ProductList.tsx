import { Row, Col } from "antd";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 999, image: "https://via.placeholder.com/150" },
  { id: 2, name: "MacBook Pro", price: 1999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "AirPods Pro", price: 249, image: "https://via.placeholder.com/150" },
];

const ProductList = () => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((p) => (
        <Col xs={24} sm={12} md={8} key={p.id}>
          <ProductItem {...p} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
