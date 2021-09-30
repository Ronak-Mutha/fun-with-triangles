const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const calculateBtn = document.querySelector("#calculate-btn");
const outputElement = document.querySelector(".output");

const calculateArea = () => {

  // heron's formula: a = √s(s-a)(s-b)(s-c) where s = (a + b + c)/2
  const a = Number(side1.value);
  const b = Number(side2.value);
  const c = Number(side3.value);
if(!a || !b || !c) {
  outputElement.innerText = 'Value should not be empty or zero. Please input value greater than 0.'
  return;
}

  if (
    a + b > c &&
    b + c > a &&
    a + c > b
  ) {
    const s =
      (a + b + c) / 2;

    const result = Math.sqrt(
      s *
        (s - a) *
        (s - b) *
        (s - c)
    ).toFixed(2);
    outputElement.innerText = `Area of a triangle is ${result} units`;
  } else {
    outputElement.innerText = "Enter valid side lengths such that each side lengths";
  }
}

calculateBtn.addEventListener("click", calculateArea);