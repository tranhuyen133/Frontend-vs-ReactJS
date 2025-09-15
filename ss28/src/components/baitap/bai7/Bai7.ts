// Định nghĩa kiểu callback: nhận giá trị, index, và chính mảng
type Callback<T> = (value: T, index: number, array: T[]) => void;

// Xây dựng hàm myForEach
function myForEach<T>(array: T[], callback: Callback<T>): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Callback minh họa
const printElement: Callback<number> = (value, index, array): void => {
    console.log(`Phần tử: ${value}, Vị trí: ${index}, Mảng: [${array.join(", ")}]`);
};

// Input
const numbers: number[] = [1, 2, 3, 4, 5, 6];

// Gọi hàm
myForEach(numbers, printElement);
