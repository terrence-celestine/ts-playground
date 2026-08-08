import { isNonEmptyString } from "../type-guards/isNonEmptyString";
import { isObject } from "../type-guards/isObject"

type Result<T> = | { ok: true, value: T } | { ok: false, errors: string[] }

interface SignUpPayload {
    name: string;
    email: string;
    password: string;
}

const isValidSignup = (payload: unknown): Result<SignUpPayload> => {
    if (!isObject(payload)) return { ok: false, errors: ["payload is not an object"] }
    if (!isNonEmptyString(payload.name)) return { ok: false, errors: ["name is not a string or missing"] };
    if (!isNonEmptyString(payload.email)) return { ok: false, errors: ["email is not a string or missing"] };
    if (!isNonEmptyString(payload.password)) return { ok: false, errors: ["password is not a string or missing"] };
    return { ok: true, value: { name: payload.name, email: payload.email, password: payload.password } }
}

export default isValidSignup