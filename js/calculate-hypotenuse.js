const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculate-btn");
const outputElement = document.querySelector(".output");

const calculateHypotenuse = () => {
  if (!(base.value && height.value)) {
    outputElement.innerHTML = "Please fill all the input fields.";
    return;
  }

  if (base.value < 1 || height.value < 1) {
    outputElement.innerHTML = "Value should be greater than zero.";
    return;
  }

  const sumOfSquares = base.value ** 2 + height.value ** 2;

  const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
  outputElement.innerText = `The length of hypotenuse is ${lengthOfHypotenuse}.`;
};

calculateBtn.addEventListener("click", calculateHypotenuse);
