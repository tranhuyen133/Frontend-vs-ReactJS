import React from "react";

const ListCourse: React.FC = () => {
  // Dữ liệu danh sách khóa học
  const courses: string[] = ["HTML", "CSS", "JavaScript", "ReactJS"];

  return (
    <div>
      <h2>Danh sách khóa học</h2>
      <ol>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ol>
    </div>
  );
};

export default ListCourse;
