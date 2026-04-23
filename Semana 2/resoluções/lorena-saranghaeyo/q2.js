const dividendo = 5;
const divisor = 0;
const divisao = Math.floor(dividendo / divisor);
const resto = dividendo % divisor;

if (divisor === 0) {
    console.log("Error 404 Not Found.");
} else if (resto > 0) {
    console.log(`O quociente é ${divisao} e o resto é ${resto}`);
} else {
    console.log(`O quociente é ${divisao} e não há resto.`);
};