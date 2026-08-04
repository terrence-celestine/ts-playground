import { isAdmin } from "../type-guard/isAdmin";
import { User, Admin } from "../../shared/user";

const terrence: User = {
    id: 1,
    name: "terrence",
    age: 37,
    role: "user"
}

const tori: Admin = {
    id: 2,
    name: "tori",
    age: 30,
    role: "admin"
}

console.log(`Is ${terrence.name} an admin?`, isAdmin(terrence))
console.log(`Is ${tori.name} an admin?`, isAdmin(tori))