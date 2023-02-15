var buttonElement = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener("click", function () {
    console.log(add(Number(input1.value), Number(input2.value)));
});
