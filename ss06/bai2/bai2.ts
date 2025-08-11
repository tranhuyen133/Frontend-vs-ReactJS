// 1. Abstract class Job
abstract class Job {
    constructor(protected type: string) {}

    // In ra loại công việc
    public printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    // Phương thức trừu tượng: tính lương
    public abstract calculateSalary(): number;
}

// 2. Lớp FulltimeJob
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }

    public calculateSalary(): number {
        return 10000000; // lương cố định
    }
}

// 3. Lớp ParttimeJob
class ParttimeJob extends Job {
    constructor(private workingHour: number) {
        super("Part-time");
    }

    public calculateSalary(): number {
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
