import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function InputUrl() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const studentName = searchParams.get("inputName");

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setSearchParams({ inputName: inputValue });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Nhập tên"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      {studentName && (
        <div style={{ marginTop: "20px" }}>
          <h2>Kết quả tìm kiếm</h2>
          <p>
            Bạn vừa tìm: <strong>{studentName}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default InputUrl;
