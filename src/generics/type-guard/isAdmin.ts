import { User, Admin } from "../../shared/user"

export const isAdmin = (x: User | Admin): x is User => {
    return (x as Admin).role === "admin"
}