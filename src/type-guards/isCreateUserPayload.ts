import { isNonEmptyString } from "./isNonEmptyString";
import { isObject } from "./isObject";

interface CreateUserPayload {
    name: string;
    email: string;
    password: string;
}

export const isCreateUserPayload = (payload: unknown): payload is CreateUserPayload => {
    if (!isObject(payload)) return false;
    if (!isNonEmptyString(payload.name)) return false;
    if (!isNonEmptyString(payload.email)) return false;
    if (!isNonEmptyString(payload.password)) return false;
    return true;
}