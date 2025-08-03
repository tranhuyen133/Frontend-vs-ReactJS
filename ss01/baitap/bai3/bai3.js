// Tạo mảng các sinh viên
const students = [
  { id: 1, name: "Nguyễn A" },
  { id: 2, name: "Trần B" },
  { id: 3, name: "Lê C" }
];

// Duyệt mảng và in lời chào bằng Template String
students.forEach(function(student) {
  console.log(`Xin chào ${student.name}! Mã số: ${student.id}.`);
});
