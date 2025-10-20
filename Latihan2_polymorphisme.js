class Employee {
    calculateSalary() {
        console.log("Menghitung Gaji Karyawan");
    }
}

class FullTimeEmployee extends Employee {
    // polymorphisme Overidding
    calculateSalary() {
        console.log(`Gaji Karyawan tetap adalah ${this.baseSalery}`);
    }
}

class PartTimeEmployee extends Employee {
    // polymorphisme Overloading, karena ada penambahan parameter baru. totalHours
    calculateSalary(totalHours) {
        this.baseSalery = 50000;
        this.totalSalary = this.baseSalery * totalHours;
        console.log(
            `Gaji karyawan part time adalah total jam kerja/bulan${totalHours}, dengan gaji per jam ${this.baseSalery}, maka gaji bulan ini adalah ${this.totalSalary}`
        );
    }
}

const partTime = new PartTimeEmployee();
partTime.calculateSalary(40);
