// Hàm arrow function kiểm tra chẵn hay lẻ
const checkParity = (a) => {
  // Kiểm tra nếu không phải là số
  if (typeof a !== "number") {
    return "Không phải là số!";
  }

  // Nếu là số, kiểm tra chẵn hay lẻ
  if (a % 2 === 0) {
    return a + " là số chẵn";
  } else {
    return a + " là số lẻ";
  }
}

// Gọi hàm để kiểm tra thử
console.log(checkParity("hello"));  // Không phải là số!
console.log(checkParity(10));       // 10 là số chẵn
console.log(checkParity(7));        // 7 là số lẻ
