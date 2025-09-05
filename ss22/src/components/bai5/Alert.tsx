import React from "react";
import { Alert } from "react-bootstrap";

const Alerts: React.FC = () => {
  return (
    <div className="d-flex flex-column gap-3 p-4" style={{ maxWidth: "600px", margin: "50px auto" }}>
      {/* Alert thành công */}
      <Alert variant="success">
        ✅ Đây là thông báo <strong>thành công!</strong>
      </Alert>

      {/* Alert cảnh báo */}
      <Alert variant="warning">
        ⚠️ Đây là thông báo <strong>cảnh báo!</strong>
      </Alert>

      {/* Alert lỗi */}
      <Alert variant="danger">
        ❌ Đây là thông báo <strong>lỗi!</strong>
      </Alert>

      {/* Alert thông tin */}
      <Alert variant="info">
        ℹ️ Đây là thông báo <strong>thông tin!</strong>
      </Alert>
    </div>
  );
};

export default Alerts;
