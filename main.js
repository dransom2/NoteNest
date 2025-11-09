
import { validateEmail, getUser, setUser, clearUser } from "./Body/auth.js";
import { initQuiz, answerQuestion, summarizeQuiz } from "./Body/quiz.js";
import { saveResult, getResult } from "./Body/results.js";
import { login, logout } from "./controllers/auth.js";
import { startQuiz, answer, finish } from "./controllers/quiz.js";

