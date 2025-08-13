// 1. Khai báo enum weekDays
enum WeekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

// 2. Hàm generic in tất cả giá trị của enum
function printEnumValues<T>(enumObj: T): void {
    Object.values(enumObj).forEach(value => {
        console.log(value);
        
    });
}

// Gọi hàm để in ra các ngày trong tuần
printEnumValues(WeekDays);
