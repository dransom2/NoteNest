
import { initQuiz, answerQuestion, summarizeQuiz } from "../Body/quiz.js";
import { saveResult } from "../Body/results.js";

//gets the quizData and starts the test
export function startQuiz(questions) {
  initQuiz(questions);
}
//Records user input and adds it to the answerBank for the summary
export function answer(questionId, choiceIndex) {
  answerQuestion(questionId, choiceIndex);
}
//Actions taken when finish button is pressed on quiz
export function finish() {
  const summary = summarizeQuiz();
  saveResult(summary);
  return summary;
}
