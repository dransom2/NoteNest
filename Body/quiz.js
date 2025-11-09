//"3D Array" containing questions and student answers for the quiz
let bank = {
  questions: [],
  answers: new Map()  //using Map to store different different type values (char, const, ect)
};
//Creating quiz from .txt file
export function initQuiz(questions) {
  for (let i = 0; i < quizSize; i++) {
  bank.questions = questions || [];
  bank.answers = new Map();
  }
}
//recording answers taken during test
export function answerQuestion(questionNum, choice) {
  bank.answers.set(questionNum, choice);
}
//Calculate the ammount of answers correctly answered for a summary 
export function summarizeQuiz() {
  let correctAns = 0;
  for (const q of bank.questions) {
    if (bank.answers.get(q.id) === q.answerIndex) correctAns++;
  }

  const total = bank.questions.length;
  //returns the correct answer ammount, inccorect ammount, and percentage. (has fallback if total is = 0 to equal 0 instead of NaN)
  return { correct, incorrect: total - correct, total, percent: total ? (correct/total*100): 0};
}
