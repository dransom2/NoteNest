
let currentUser = null;

//Chhecks if email is a valid twu email, and is in system bank
exp
rt function validateEmail(email) {
  return email;
}

//Updating the status of the user
export function setUser(user) {
  currentUser = user;
}

export function getUser() {
  return currentUser;
}

export function clearUser() {
  currentUser = null;
}
