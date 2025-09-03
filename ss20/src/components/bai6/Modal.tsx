import React, { useState, useRef, useEffect } from "react";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false); // trạng thái mở/đóng modal
  const inputRef = useRef<HTMLInputElement | null>(null); // ref trỏ vào input

  // Khi modal mở, focus vào input
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]); // chạy lại khi isOpen thay đổi

  return (
    <div>
      <h2>Ví dụ Modal với ref</h2>
      <button onClick={() => setIsOpen(true)}>Mở Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Nhập thông tin</h3>
            <input
              type="text"
              ref={inputRef}
              placeholder="Nhập vào đây..."
            />
            <br />
            <button onClick={() => setIsOpen(false)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalExample;
