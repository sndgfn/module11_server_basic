type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number };

function drawShape(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            console.log(`Drawing a Circle with radius ${shape.radius}`);
            break;
        case "rectangle":
            console.log(`Drawing a Rectangle (${shape.width}x${shape.height})`);
            break;
    }
}enum EmployeeType {
    FullTime = 50000,
    PartTime = 20000,
    Contractor = 30000
}

class Employee {
    constructor(public name: string, private type: EmployeeType) {}

    getSalary(): number {
        return this.type;
    }
}

// Usage
const emp1 = new Employee("Alice", EmployeeType.FullTime);
console.log(`${emp1.name} earns ${emp1.getSalary()}`);