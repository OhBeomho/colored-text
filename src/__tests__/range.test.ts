import { fullRanged, foregroundRanged, backgroundRanged } from ".."

test("Full Ranged", () => {
  expect(fullRanged("test", "blue", "gray", 2, 3)).toBe("te\x1b[34m\x1b[100ms\x1b[0mt")
})

test("Foreground Ranged", () => {
  expect(foregroundRanged("test", "magenta", 0, 2)).toBe("\x1b[35mte\x1b[0mst")
})

test("Background Ranged", () => {
  expect(backgroundRanged("test", "cyan", 1, 3)).toBe("t\x1b[46mes\x1b[0mt")
})

test("No end given", () => {
  expect(foregroundRanged("test", "black", 2)).toBe("te\x1b[30mst\x1b[0m")
})

test("Start equal to end", () => {
  expect(() => foregroundRanged("test", "black", 1, 1)).toThrowError(RangeError)
})

test("Negative range", () => {
  expect(() => foregroundRanged("test", "black", 0, -1)).toThrowError(RangeError)
  expect(() => foregroundRanged("test", "black", -1, 0)).toThrowError(RangeError)
})

test("Greater than text length", () => {
  expect(() => foregroundRanged("test", "black", 0, 10)).toThrowError(RangeError)
})
