// ReturnType<typeof fn> — derives a type from a function's return value.
const getUser = () => {
    return { id: 1, name: "Terrence", age: 37 };
};

type User = ReturnType<typeof getUser>;

const Tori: User = { id: 2, name: "Tori", age: 30 };

console.log(Tori);
