namespace EmployeeDetails {

    export class Employee {

        constructor(
            public name: string,
            public salary: number
        ) {}

        show(): void {
            console.log("Employee:", this.name);
            console.log("Salary:", this.salary);
        }
    }
}

const emp = new EmployeeDetails.Employee("Gayathri", 50000);

emp.show();