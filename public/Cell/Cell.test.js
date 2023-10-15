import Cell from "./Cell";

describe("Given the method die", () => {
  describe("When the cell it receive false", () => {
    test("Then it should return false", () => {
      const cell = new Cell(false);
      cell.die();

      const cellState = cell.state();

      expect(cellState).toBe(false);
    });
  });
  describe("When the cell it receive true", () => {
    test("Then it should return true", () => {
      const cell = new Cell(true);
      cell.live();

      const cellState = cell.state();

      expect(cellState).toBe(true);
    });
  });
  describe("When the cell it receive false", () => {
    test("Then it should return false", () => {
      const cell = new Cell(false);
      cell.die();

      const cellState = cell.state();

      expect(cellState).toBe(true);
    });
  });
});
