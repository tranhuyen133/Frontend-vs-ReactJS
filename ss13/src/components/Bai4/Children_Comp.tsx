import React from "react";

// Định nghĩa kiểu dữ liệu cho props
interface IProps {
  name: string;
}

function Children_Comp(props: IProps) {
  return (
    <div>
      <h3>Đây là Component Con</h3>
      <p>Tên được truyền từ cha: <b>{props.name}</b></p>
    </div>
  );
}

export default Children_Comp;
