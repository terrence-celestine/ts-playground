import { User, Admin } from "../shared/user"

export const isAdmin = (x: User | Admin): x is Admin => {
    return x.role === "admin"
}