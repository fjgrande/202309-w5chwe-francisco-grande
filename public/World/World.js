import Cell from "../Cell/Cell.js";

class World {
  cell;

  constructor() {
    this.cell = [];
  }

  initBoard(length, isAlive) {
    for (let indexRow = 0; indexRow < length; indexRow++) {
      this.cell[indexRow] = [];
      for (let indexColum = 0; indexColum < length; indexColum++) {
        this.cell[indexRow][indexColum] = new Cell(isAlive);
      }
    }

    return this.cell;
  }
}

export default World;
