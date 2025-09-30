import React from "react";

export default function Pagination({ page, total, limit, onChange }: any) {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  return (
    <div style={{ marginTop: 10 }}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
        <button
          key={num}
          style={{ marginRight: 5 }}
          disabled={num === page}
          onClick={() => onChange(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
