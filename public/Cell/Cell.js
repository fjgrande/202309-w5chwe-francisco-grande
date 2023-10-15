class Cell {
  isAlive;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  state() {
    return this.isAlive;
  }

  die() {
    this.isAlive = false;
  }

  live() {
    this.isAlive = true;
  }
}

export default Cell;
