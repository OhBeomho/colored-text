import { color } from ".."

test("color 1", () => {
  expect(color("test", "red")).toBe("\x1b[31mtest\x1b[0m")
})

test("color 2", () => {
  expect(color("test", "gray", "white")).toBe("\x1b[90m\x1b[47mtest\x1b[0m")
})
