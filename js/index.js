const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputElement = document.querySelector(".output");

const quiz = [
  {
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    answers: ["45°", "90°", "60°"],
    correctAnswer: "90°",
  },
  {
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    answers: ["obtuse", "acute", "right angled"],
    correctAnswer: "right angled",
  },
  {
    question: "A triangle can have",
    answers: ["one right angle", "two right angles"],
    correctAnswer: "one right angle",
  },
  {
    question: "Which of the following can form a right angled triangle?",
    answers: ["14, 15, 26", "12, 16, 20"],
    correctAnswer: "12, 16, 20",
  },
  {
    question: "Which of the following triangles are always similar?",
    answers: ["Equilateral triangle", "Isosceles triangle"],
    correctAnswer: "Equilateral triangle",
  },
  {
    question:
      "If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",
    answers: ["100°", "85°"],
    correctAnswer: "100°",
  },
  {
    question:
      "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
    answers: ["30°", "10°"],
    correctAnswer: "30°",
  },
  {
    question: "The perimeter of scalene triangle with sides a, b, c is",
    answers: ["a + b + c", "2a", "None of these"],
    correctAnswer: "a + b + c",
  },
  {
    question: "A scalene triangle has ___ lines of symmetry",
    answers: ["two", "no", "15"],
    correctAnswer: "no",
  },
  {
    question:
      "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
    answers: ["85°", "65°", "45°"],
    correctAnswer: "45°",
  },
];

const viewQuiz = (quiz) => {
  quiz.forEach((questions, i) => {
    const question = questions.question;
    const answers = questions.answers;

    const div = document.createElement("div");
    div.className = "quiz-container";

    const p = document.createElement("p");
    p.innerText = `${i + 1}. ${question}`;

    div.append(p);
    quizForm.appendChild(div);

    answers.forEach((answer) => {
      const label = document.createElement("label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${i}`;
      input.value = answer;

      label.append(input, answer);
      div.appendChild(label);
    });
  });
};

viewQuiz(quiz);

const calculateScore = () => {
  const formResults = new FormData(quizForm);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === quiz[index].correctAnswer) {
      score += 1;
    }
    index++;
  }
  outputElement.innerText = `Your final score is ${score}.`;
};

submitBtn.addEventListener("click", calculateScore);
