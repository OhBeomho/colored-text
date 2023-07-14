import { style } from ".."

test("style 1", () => {
  expect(style("test", "bright")).toBe("\x1b[1mtest\x1b[0m")
})

test("style 2", () => {
  expect(style("test", "blink", "underscore")).toBe("\x1b[5m\x1b[4mtest\x1b[0m")
})
