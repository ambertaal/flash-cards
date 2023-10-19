import { CollectionsEnum } from "./models/CollectionsEnum";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Question } from "./models/Question";
import { addItem } from "./crud/add";

const querySnapshot = await getDocs(collection(db, CollectionsEnum.Questions));
let questions: Question[] = [];
querySnapshot.forEach((doc) => {
  const data = doc.data();

  const newQuestion: Question = {
    question: data.question,
    answer: data.answer,
  };

  questions.push(newQuestion);
});

const showQuestion = document.querySelector(
  ".flash-card-front h2"
) as HTMLHeadingElement;
const showAnswer = document.querySelector(
  ".flash-card-back p"
) as HTMLParagraphElement;
const prevButton = document.getElementById("prev") as HTMLButtonElement;
const nextButton = document.getElementById("next") as HTMLButtonElement;
const form = document.getElementById("questionForm") as HTMLFormElement;
const addQuestionButton = document.getElementById(
  "addQuestionButton"
) as HTMLButtonElement;

addQuestionButton.onclick = function (e: any) {
  e.preventDefault();
  // console.log("I was clicked");

  const formData = new FormData(form);
  let questionTosend: { question: string; answer: string } = {} as {
    question: string;
    answer: string;
  };
  for (const [question, answer] of formData.entries()) {
    questionTosend = { ...questionTosend, [question]: answer };
  }
  // console.log(questionTosend);
  addItem(questionTosend.question, questionTosend.answer);
};

const totalCount = document.getElementById("totalCount") as HTMLSpanElement;
totalCount.innerText = questions.length.toString();

const currentElement = document.getElementById(
  "currentElement"
) as HTMLSpanElement;

currentElement.innerText = "1";

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

    currentElement.innerText = (questionCount + 1).toString();
  });

  prevButton.addEventListener("click", () => {
    if (questionCount > 0) {
      questionCount--;
    }
    showQuestion.textContent = questions[questionCount].question;
    showAnswer.textContent = questions[questionCount].answer;

    currentElement.innerText = (questionCount + 1).toString();
  });
}
