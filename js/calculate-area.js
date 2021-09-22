const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const calculateBtn = document.querySelector("#calculate-btn");
const outputElement = document.querySelector(".output");

const calculateArea = () => {

  const side1Value = Number(side1.value);
  const side2Value = Number(side2.value);
  const side3Value = Number(side3.value);
if(!side1Value || !side2Value || !side3Value) {
  outputElement.innerText = 'Please fill all the input fields.'
  return;
}

  if (
    side1Value + side2Value > side3Value &&
    side2Value + side3Value > side1Value &&
    side1Value + side3Value > side2Value
  ) {
    const semiPerimeter =
      (side1Value + side2Value + side3Value) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - side1Value) *
        (semiPerimeter - side2Value) *
        (semiPerimeter - side3Value)
    ).toFixed(2);
    outputElement.innerText = `Area of a triangle using heron's formula is ${result} units`;
  } else {
    outputElement.innerText = "Enter valid side lengths such that each side lengths";
  }
}

calculateBtn.addEventListener("click", calculateArea);