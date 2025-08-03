const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

function extractData({ data }) {
    // Trích xuất title và author từ data
    const { title, author } = data;

    // Trích xuất name và email từ author, đồng thời đổi tên biến thành authorName và authorEmail
    const { name: authorName, email: authorEmail } = author;

    // In ra kết quả
    console.log("title:", title);
    console.log("authorName:", authorName);
    console.log("authorEmail:", authorEmail);
}

// Gọi hàm với đối tượng response
extractData(response);
