import React, { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    console.log("🎉 Component Welcome đã được render lần đầu!");
  }, []); // dependency rỗng => chỉ chạy 1 lần khi render lần đầu

  return (
    <div>
      <h2>Xin chào bạn đến với ứng dụng React!</h2>
    </div>
  );
}

export default Welcome;
