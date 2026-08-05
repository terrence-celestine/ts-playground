/*
satisfies helps to check that an objects key/values match against a type.
*/
interface GameConsole {
    id: string | number;
    name: string;
    release_date: string;
    price: number;
}

const ps2 = {
    id: "0",
    name: "Playstation 2",
    release_date: "November 02, 2001",
    price: 199.99
} satisfies GameConsole

