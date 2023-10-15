import World from "./World/World.js";

const board = new World();

board.initBoard(3, false);
board.cell[1][2].live();

console.log(board);
