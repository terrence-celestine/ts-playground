// ReturnType<typeof fn> — derives a type from a function's return value.
const getUser = () => {
    return { id: 1, name: "Terrence", age: 37 };
};

type BaseUser = ReturnType<typeof getUser>;

const Tori: BaseUser = { id: 2, name: "Tori", age: 30 };

console.log(Tori);
