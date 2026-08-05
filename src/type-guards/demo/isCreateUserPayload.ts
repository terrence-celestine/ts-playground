import { isCreateUserPayload } from "../isCreateUserPayload";

// isCreateUserPayload — validates an unknown value (e.g. a request body) has the
// required non-empty string fields before it's treated as a CreateUserPayload.
const valid: unknown = { name: "terrence", email: "t@example.com", password: "hunter2" };
const invalid: unknown = { name: "terrence", email: "" };

console.log("valid payload?", isCreateUserPayload(valid));
console.log("invalid payload?", isCreateUserPayload(invalid));
