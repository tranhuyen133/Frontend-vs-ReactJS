let student = {
  name: "Dev",
  age: 20,
  listMonhoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 },
  ],
};

function getStudentSummary(student) {
  // Lấy thông tin cơ bản
  let { name, age, listMonhoc: listSubject } = student;

  // Tính điểm trung bình
  let total = listSubject.reduce((acc, item) => acc + item.score, 0);
  let average = Math.round((total / listSubject.length) * 100) / 100;

  // Xếp loại học sinh
  let type = "";
  if (average >= 8.5) type = "Học sinh giỏi";
  else if (average >= 7) type = "Học sinh khá";
  else if (average >= 5) type = "Học sinh trung bình";
  else type = "Học sinh yếu";

  // Sắp xếp trực tiếp trên listSubject theo điểm giảm dần
  listSubject.sort((a, b) => b.score - a.score);

  // Môn học tốt nhất và kém nhất sau khi sort
  let best = listSubject[0];
  let worst = listSubject[listSubject.length - 1];

  // In kết quả
  console.log(`Tên: ${name}`);
  console.log(`Tuổi: ${age}`);
  console.log(`Điểm trung bình: ${average}`);
  console.log(`Xếp loại: ${type}`);
  console.log(`Môn học tốt nhất: ${best.subject} (${best.score})`);
  console.log(`Môn học kém nhất: ${worst.subject} (${worst.score})`);
}

// Gọi hàm
getStudentSummary(student);
