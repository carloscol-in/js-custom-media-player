// Boolean
let muted: boolean = true;
muted = false;

// Numbers
let num: number = 123;
let denom: number = 23;
let res = num / denom;

// String
let username: string = "carlos";
let greet = `Hi, welcome back ${username}`;

// Arrays
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul', 'Brenda', 'Rebeca'];
// people.push(900);
people.push('Carlos');

let people_and_numbers: Array<string | number>;
people_and_numbers = ['Isabel', 23, 'Clara', 'Marisol', 'Diego', 12, 45, 'Emilio'];
people_and_numbers.push(900);

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue",
    Yellow = "Yellow",
    Orange = "Orange",
}

let fav_color: Color = Color.Red;
console.log(`My favourite color is ${fav_color}`);

// Any
let card: any = "Joker";
card = { type: 'Wildcard' };

// Object
let obj: object = {};


// Functions
function addNums(a: number, b: number): number {
    return a + b;
}

let sum = addNums(1, 2);


function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

let addFour = createAdder(4);
let fourPlus6 = addFour(6);
console.log(fourPlus6);


function fullName(first_name: string, last_name?: string): string {
    let full_name = `${first_name}`;
    if (last_name) full_name = full_name + ` ${last_name}`;
    return full_name;
}

let user = fullName('Joe', 'Doe');
console.log(`-${user}-`);


// Interfaces
interface Rectangle {
    width: number,
    height: number,
    color: Color,
}

let rect: Rectangle = {
    width: 6,
    height: 3,
    color: Color.Orange,
}

function area(r: Rectangle): number {
    return (r.height * r.width) / 2;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return `A ${this.color} rectangle.`
}

console.log(rect.toString());