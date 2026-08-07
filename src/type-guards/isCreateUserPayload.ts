import { isNonEmptyString } from "./isNonEmptyString";

interface CreateUserPayload {
    name: string;
    email: string;
    password: string;
}

export const isCreateUserPayload = (payload: unknown): payload is CreateUserPayload => {
    if (typeof payload !== "object" || payload === null) return false;
    const obj = payload as Record<string, unknown>;
    if (!isNonEmptyString(obj.name)) return false;
    if (!isNonEmptyString(obj.email)) return false;
    if (!isNonEmptyString(obj.password)) return false;
    return true;
}