
import { validateEmail, setUser, clearUser } from "../Body/auth.js";

//Validate the user email from an external source (ex. loginBank.txt)
export async function login(email) {
  const validEmail = validateEmail(email);
  if (ok) setUser({ email });  //"ok" is not defined; temporary placeholder for a boolean representing if a login in true/false
  return ok;
}
//Clear user loginData and logs out
export async function logout() {
  clearUser();
}
