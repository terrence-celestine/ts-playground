// Extract<Union, Members> — narrows a union to the members you ask for.
type Foods = "apple" | "banana" | "meat";

type MeatsOnly = Extract<Foods, "meat">;
type FruitsOnly = Extract<Foods, "apple" | "banana">;

const meat: MeatsOnly = "meat";
const fruit: FruitsOnly = "apple";

console.log(meat);
console.log(fruit);
