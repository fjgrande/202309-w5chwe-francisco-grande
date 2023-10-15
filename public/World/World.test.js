import World from "./World";

describe("Given the method initBoard", () => {
  describe("When receive length value 3", () => {
    test("Then should it return value 3", () => {
      const world = new World();
      const boardSize = 3;

      const board = world.initBoard(boardSize, true);

      expect(board.length).toBe(boardSize);
    });
  });
  describe("When receive length value 4", () => {
    test("Then should return 4", () => {
      const world = new World();
      const boardSize = 4;

      const board = world.initBoard(boardSize, true);

      expect(board.length).toBe(boardSize);
    });
  });
});
