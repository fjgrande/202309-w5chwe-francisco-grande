import Cell from "../CellMother/CellMother.js";

class World {
  cell;

  constructor() {
    this.cell = [];
  }

  initWorld(length, isAlive, ...element) {
    for (let indexRow = 0; indexRow < length; indexRow++) {
      this.cell[indexRow] = element;
      for (let indexColum = 0; indexColum < length; indexColum++) {
        this.cell[indexRow][indexColum] = new Cell(isAlive);
      }
    }

    return this.cell;
  }
}

export default World;
