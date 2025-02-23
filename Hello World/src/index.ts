let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

let numbers: number[] = [];
let user: [number, string] = [1, "Mosh"];

// theses are variables small will be 1 medium will be 2 and large will be 3
const enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

// tax year has a default value that is used if the tax year is not passed in
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

let income = calculateTax(10000, 2023);
console.log(income);


type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: "",
    retire: (date: Date) => {
        console.log(date);
    }
};

function kgToLbs(weight: number | string): number {
    if(typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10);
kgToLbs("10kg");


type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void;
}

//type intersection
type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal (exact, specific)
type Quanitity = 50 | 100;
let quantity: Quanitity = 50;

type Metric = "cm" | "inch";


function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toLocaleUpperCase());
    } else {
        console.log("Hola!");
    }
}

greet(null);

type Customer = {
    birthday?: Date
}

// : means otherwise
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
//Optional Property Access operator, ? means optional
console.log(customer?.birthday?.getFullYear())

// Optional element access operator
//customer?.[0]

let log: any = null;
log?.("a");




