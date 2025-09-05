import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Dropdowns: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      {/* DropdownButton trong React-Bootstrap */}
      <DropdownButton id="dropdown-basic-button" title="Chọn mục" variant="primary">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Dropdowns;
