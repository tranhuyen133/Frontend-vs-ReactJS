import { Card, Button } from "antd";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductItem: React.FC<ProductProps> = ({ name, price, image }) => {
  return (
    <Card
      hoverable
      cover={<img alt={name} src={image} style={{ height: 150, objectFit: "cover" }} />}
    >
      <Card.Meta title={name} description={`$${price}`} />
      <Button type="primary" block style={{ marginTop: 12 }}>
        Thêm vào giỏ
      </Button>
    </Card>
  );
};

export default ProductItem;
