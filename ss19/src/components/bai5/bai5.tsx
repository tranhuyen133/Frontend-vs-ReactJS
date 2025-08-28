import React, { useState } from "react";

function Bai5() {
  const quotes = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  function getRandomQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[idx]);
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Random Quote</h2>

      <div className="min-h-[80px] flex items-center justify-center px-4 py-6 border rounded-lg bg-gray-50">
        <p className="text-center text-lg">{quote}</p>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={getRandomQuote}
          className="px-4 py-2 rounded-xl shadow hover:shadow-lg transition-shadow focus:outline-none"
        >
          Lấy câu nói mới
        </button>
      </div>

      <p className="mt-3 text-sm text-center text-gray-500">Click để lấy một câu ngẫu nhiên (có thể trùng).</p>
    </div>
  );
}

export default Bai5;
