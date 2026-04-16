// Week 1

// Q1
console.log("Hello World");

// Q2

const student = true;
const credits = true;
const restaurant = true;
// const result = restaurant && (student || credits); // Am I wrong?
const result = student || (credits && restaurant); // Can enter even if the restaurant is closed?

console.log(result ? "$1$" : "$0$");

// Q3

const height = 5;
for (let i = 0; i < height; i++) {
    let spaces = " ".repeat(height - i - 1);
    let leaves = "X".repeat(2 * i + 1);

    console.log(spaces + leaves);
};

console.log(" ".repeat(height - 1) + "X");

// Q4

const value1 = 10;
const value2 = value1 / 5;
console.log(`Value 1 = ${value1 ** 2} and value 2 = ${value2}`);

// Q5

const x = 0.5;
const y = 0.5;

console.log((x >= 0) && (y >= 0) && (x ** 2 + y ** 2 <= 1) ? 1 : 0);

// Q6 

let n1 = 5, n2 = 6, n3 = 7;
let p1 = 1, p2 = 2, p3 = 3;

let nota = n1*p1 + n2*p2 + n3*p3;
let p = p1 + p2 + p3;

let final = nota / p;

console.log(final.toFixed(2));

// Q7

let v1 = 3;
let temp = v1;
let v2 = 4;

console.log(`Value 1 = ${v1 = v2}, Value 2 = ${v2 = temp}`);

// Q8

const num1 = 2;
const num2 = 3;

console.log(`Sum - ${num1+num2}\nSubtract - ${num1 - num2}\nMultiply - ${num1 * num2}\nDivision - ${(num1 / num2).toFixed(2)}`);

// Q9

let hours = 2;
let seconds = (hours * 60) * 60;
console.log(seconds);

// Q10

let nome = "Lorena";
let idade = "Misterio";
let curso = "Segurança da Informação";

console.log(`Olá, ${nome}! Você tem ${idade} e faz ${curso}!`);

// You're my everything
// Even when it hurts, I stay
// I see you in every moment

//    (｡•ㅅ•｡)♡
//       / づ
//      🤏