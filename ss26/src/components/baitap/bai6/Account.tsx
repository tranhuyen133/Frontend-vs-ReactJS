import React from "react";

function Account() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <div>
      <h2>Xin chào {user?.email}</h2>
      <p>Quyền của bạn: {user?.role}</p>
    </div>
  );
}

export default Account;
