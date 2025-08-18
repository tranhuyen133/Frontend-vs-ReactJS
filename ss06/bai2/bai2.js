// 1. Abstract class Job
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    // In ra loại công việc
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
// 2. Lớp FulltimeJob
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10000000; // lương cố định
    }
}
// 3. Lớp ParttimeJob
class ParttimeJob extends Job {
    workingHour;
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
// --- Sử dụng ---
const fulltime = new FulltimeJob();
const parttime = new ParttimeJob(80); // 80 giờ làm
fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary().toLocaleString()} VND`);
parttime.printType();
console.log(`Lương: ${parttime.calculateSalary().toLocaleString()} VND`);
export {};
//# sourceMappingURL=bai2.js.map