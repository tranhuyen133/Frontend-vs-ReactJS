import React, { useState } from "react";

function InputChecker() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h2>Nhập chuỗi để kiểm tra</h2>
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="Nhập vào đây..."
      />
      <p>Giá trị hiện tại: {value}</p>

      {value.length > 5 && (
        <p>Chuỗi dài hơn 5 ký tự!</p>
      )}
    </div>
  );
}

export default InputChecker;
