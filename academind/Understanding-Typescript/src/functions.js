"use strict";
function addNumbers(n1, n2) {
    return n1 + n2;
}
function printResultFunc(num) {
    console.log(`Result: ${num}`);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
console.log(printResultFunc(addNumbers(5, 12)));
let combineValues;
combineValues = addNumbers;
// combineValues = printResultFunc;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
