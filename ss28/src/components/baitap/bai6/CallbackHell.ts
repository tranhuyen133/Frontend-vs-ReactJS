// Định nghĩa kiểu callback: không tham số, không trả về gì
type Callback = () => void;

// Task 1: chạy sau 1 giây
function task1(callback: Callback): void {
    setTimeout(() => {
        console.log("Task 1 hoàn thành ✅");
        callback();
    }, 1000);
}

// Task 2: chạy sau 1.5 giây
function task2(callback: Callback): void {
    setTimeout(() => {
        console.log("Task 2 hoàn thành ✅");
        callback();
    }, 1500);
}

// Task 3: chạy sau 2 giây
function task3(callback: Callback): void {
    setTimeout(() => {
        console.log("Task 3 hoàn thành ");
        callback();
    }, 2000);
}

// Thực thi tuần tự: task1 -> task2 -> task3
task1(() => {
    task2(() => {
        task3(() => {
            console.log("Tất cả task đã hoàn thành ");
        });
    });
});
