// Hàm "delay" trả về Promise, resolve sau ms mili-giây
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Hàm processArray với async/await
async function processArray(arr: number[], callback: (value: number) => void): Promise<void> {
    for (const item of arr) {
        await delay(1000); // chờ 1 giây
        callback(item);
    }
}

// Callback để in ra phần tử
const printElement = (value: number): void => {
    console.log("Phần tử:", value);
};

// Gọi thử
const numbers: number[] = [10, 20, 30, 40, 50];
processArray(numbers, printElement);
