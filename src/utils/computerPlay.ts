import { moves } from "../data/moves";

function computerPlay(): string {
    let randomNumber: number = Math.floor(Math.random() * 3)
    return moves[randomNumber];
}

export default computerPlay;