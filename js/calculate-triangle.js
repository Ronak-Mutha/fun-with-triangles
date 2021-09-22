const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputElement = document.querySelector(".output");

const sumOfAngles = (angle1, angle2, angle3) => { 

  return angle1 + angle2 + angle3;
}

const isTriangle = () => {
  if(!inputs[0].value || !inputs[1].value || !inputs[2].value) {
    outputElement.innerText = 'Please fill all the input fields.'
    return;
  }
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (sum === 180) {
    outputElement.innerText = "Yay, the angles form a triangle!";
  } else {
    outputElement.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);