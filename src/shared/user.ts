type UserRole = "user" | "admin";

interface BaseUser {
    id: number;
    name: string;
    age: number;
    role: UserRole;
}
interface User extends BaseUser {
    role: "user";
}

interface Admin extends BaseUser {
    role: "admin"
}

export { User, Admin }