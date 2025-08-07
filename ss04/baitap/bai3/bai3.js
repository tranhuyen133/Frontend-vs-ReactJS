// Khởi tạo một đối tượng sinh viên
var student1 = {
    name: "Nguyễn Văn An",
    age: 20,
    email: "an.nguyen@example.com"
};
// Hàm in thông tin sinh viên
function introduce(student) {
    console.log("T\u00EAn t\u00F4i l\u00E0 ".concat(student.name, ", t\u00F4i ").concat(student.age, " tu\u1ED5i v\u00E0 email c\u1EE7a t\u00F4i l\u00E0 ").concat(student.email, "."));
}
introduce(student1);
