
let last = null;
let result = null;

//Records the test results 
export function saveResult(summary) {
  last = summary;
}

//Retrieve Result from desired location(s) 
export function getResult() {
  return result;
}
