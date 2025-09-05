import React from "react";
import { Form, Button } from "react-bootstrap";

const Inputs: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ width: "400px" }}>
        {/* Input Text */}
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control type="text" placeholder="Nhập họ tên..." />
        </Form.Group>

        {/* Input Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email..." />
          <Form.Text className="text-muted">
            Chúng tôi sẽ không chia sẻ email của bạn cho ai khác.
          </Form.Text>
        </Form.Group>

        {/* Input Password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu..." />
        </Form.Group>

        {/* Checkbox */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Ghi nhớ đăng nhập" />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
};

export default Inputs;
