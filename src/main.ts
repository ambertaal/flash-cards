interface Question {
  question: string;
  answer: string;
}

let questions: Question[] = [
  {
    question: "What are the different data types present in javascript?",
    answer: `1. String 2. Number 3. Bigint 4. Boolean 5. Undefined 6. Null 7.
    Symbol 8. Object`,
  },
  {
    question: `Explain Hoisting in javascript.`,
    answer: `Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
  This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.`,
  },
  {
    question: "Difference between “ == “ and “ === “ operators.",
    answer: `Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.`,
  },
  {
    question: "Difference between var and let keyword in javascript.",
    answer: `Some differences are: From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
  The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.
  In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
  `,
  },
  {
    question: "What is NaN property in JavaScript?",
    answer: `NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.`,
  },
];

const showQuestion = document.querySelector(
  ".flash-card-front h2"
) as HTMLHeadingElement;
const showAnswer = document.querySelector(
  ".flash-card-back p"
) as HTMLParagraphElement;
const prevButton = document.getElementById("prev") as HTMLButtonElement;
const nextButton = document.getElementById("next") as HTMLButtonElement;

let questionCount: number = 0;

showQuestion.textContent = questions[questionCount].question;
showAnswer.textContent = questions[questionCount].answer;

if (nextButton && prevButton) {
  nextButton.addEventListener("click", () => {
    if (questionCount < questions.length - 1) {
      questionCount++;
    }
    showQuestion.textContent = questions[questionCount].question;
    showAnswer.textContent = questions[questionCount].answer;
  });

  prevButton.addEventListener("click", () => {
    if (questionCount > 0) {
      questionCount--;
    }
    showQuestion.textContent = questions[questionCount].question;
    showAnswer.textContent = questions[questionCount].answer;
  });
}
