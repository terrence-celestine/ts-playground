import isValidSignup from "../isValidSignup";

const signUpData = { name: "foo", email: "foo@bar.com", password: "blah" }
console.log(isValidSignup(signUpData));