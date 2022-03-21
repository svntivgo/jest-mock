it("adds correctly", () => {
  expect(1+1).toEqual(2)
})

import * as app from "./app";
import * as math from "./math";

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
