import { full, foreground, background } from ".."

test("Full Color", () => {
  expect(full("test", "black", "white")).toBe("\x1b[30m\x1b[47mtest\x1b[0m")
})

test("Foreground Color", () => {
  expect(foreground("test", "gray")).toBe("\x1b[90mtest\x1b[0m")
})

test("Background Color", () => {
  expect(background("test", "red")).toBe("\x1b[41mtest\x1b[0m")
})
