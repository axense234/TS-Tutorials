"use strict";
function add(n1, n2, printResult, phrase) {
    if (printResult) {
        console.log(`${phrase}${n1 + n2}`);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.9;
const printResult = true;
const resultPhrase = `Result is: `;
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
