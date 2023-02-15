const buttonElement = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1:number, num2:number) {
  return num1 + num2;
}

buttonElement.addEventListener("click", function () {
  console.log(add(Number(input1.value), Number(input2.value)));
});