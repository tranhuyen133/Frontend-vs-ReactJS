import React from "react";
import { useParams } from "react-router-dom";


function Student() {
  const { name } = useParams();

  return (
    <div>
      <h1>Thông tin sinh viên</h1>
      <p>Tên sinh viên: {name}</p>
    </div>
  );
}

export default Student;
