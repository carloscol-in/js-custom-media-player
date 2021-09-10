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