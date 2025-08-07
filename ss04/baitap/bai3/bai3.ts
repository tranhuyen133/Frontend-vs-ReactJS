// Định nghĩa kiểu cho đối tượng Student
interface Student {
    name: string;
    age: number;
    email: string;
}

// Khởi tạo một đối tượng sinh viên
const student1: Student = {
    name: "Nguyễn Văn An",
    age: 20,
    email: "an.nguyen@example.com"
};

// Hàm in thông tin sinh viên
function introduce(student: Student): void {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

introduce(student1);
