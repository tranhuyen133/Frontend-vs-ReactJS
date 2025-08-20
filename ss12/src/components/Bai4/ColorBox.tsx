import React from "react";

type ColorBoxProps = {
  color: string;
};

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Box màu */}
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          margin: "0 auto",
        }}
      >
        Box
      </div>
      {/* Tên màu */}
      <p style={{ marginTop: "10px" }}>{color}</p>
    </div>
  );
};

export default ColorBox;
