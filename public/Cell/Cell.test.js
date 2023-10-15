import Cell from "./Cell";

describe("Given the class cell propertie", () => {
  describe("When the cell it receive false", () => {
    test("Then it should return false", () => {
      const expectedState = false;

      const stateCell = new Cell(false);

      expect(stateCell.isAlive).toBe(expectedState);
    });
  });
  describe("When the cell it receive true", () => {
    test("Then it should return true", () => {
      const expectedState = true;

      const stateCell = new Cell(true);

      expect(stateCell.isAlive).toBe(expectedState);
    });
  });
  describe("When the cell it reciev true", () => {
    test("Then it should return true", () => {
      const expectedState = false;

      const stateCell = new Cell(true);

      expect(stateCell.isAlive).tobe(expectedState);
    });
  });
});
