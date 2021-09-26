const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputElement = document.querySelector(".output");

const sumOfAngles = (angle1, angle2, angle3) => { 

  return angle1 + angle2 + angle3;
}

const isTriangle = () => {
  angle1 = inputs[0].value;
  angle2 = inputs[1].value;
  angle3 = inputs[2].value;
  if(!(angle1 && angle2 && angle3)) {
    console.log(`${angle1} : ${angle2} : ${angle3} `)
    outputElement.innerText = 'Please fill all the input fields.'
    return;
  }
  const sum = sumOfAngles(
    Number(angle1),
    Number(angle2),
    Number(angle3)
  );

  if (sum === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
    outputElement.innerText = "Yay, the angles form a triangle!";
  } else {
    outputElement.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);