import React from "react";

function Calculation() {
  // 4 hàm tính toán cơ bản
  const add = (a: number, b: number) => a + b;
  const subtract = (a: number, b: number) => a - b;
  const multiply = (a: number, b: number) => a * b;
  const divide = (a: number, b: number) => (b !== 0 ? a / b : "Không chia được cho 0");

  // 2 số để tính toán
  const num1 = 10;
  const num2 = 10;

  return (
    <div>
      <h2>Kết quả phép tính</h2>
      <p>{num1} + {num2} = {add(num1, num2)}</p>
      <p>{num1} - {num2} = {subtract(num1, num2)}</p>
      <p>{num1} x {num2} = {multiply(num1, num2)}</p>
      <p>{num1} ÷ {num2} = {divide(num1, num2)}</p>
    </div>
  );
}

export default Calculation;
