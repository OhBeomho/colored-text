type Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray"

const colors = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "gray"]
const fgStart = 30
const bgStart = 40
const reset = "\x1b[0m"

function getColorCode(color: Color, type: "fg" | "bg") {
  if (type === "fg") {
    return color !== "gray" ? `\x1b[${fgStart + colors.indexOf(color)}m` : "\x1b[90m"
  } else {
    return color !== "gray" ? `\x1b[${bgStart + colors.indexOf(color)}m` : "\x1b[100m"
  }
}

function checkIndex(textLength: number, start: number, end: number) {
  if (
    start === end ||
    start > end ||
    start > textLength ||
    end > textLength ||
    start < 0 ||
    end < 0
  ) {
    throw new RangeError()
  }
}

/**
 * Changes the foreground and background color of text
 */
export function full(text: string, foreground: Color, background: Color) {
  const textColorCode = getColorCode(foreground, "fg")
  const backgroundColorCode = getColorCode(background, "bg")

  return textColorCode + backgroundColorCode + text + reset
}

/**
 * Changes the foreground color of text
 */
export function foreground(text: string, color: Color) {
  return getColorCode(color, "fg") + text + reset
}

/**
 * Changes the background color of text
 */
export function background(text: string, color: Color) {
  return getColorCode(color, "bg") + text + reset
}

/**
 * Changes the foreground and background of text within a range
 */
export function fullRanged(
  text: string,
  foreground: Color,
  background: Color,
  start: number,
  end: number
) {
  checkIndex(text.length, start, end)

  const textColorCode = getColorCode(foreground, "fg")
  const backgroundColorCode = getColorCode(background, "bg")

  text = text.substring(0, start) + textColorCode + backgroundColorCode + text.substring(start)

  const offset = textColorCode.length + backgroundColorCode.length
  text = text.substring(0, end + offset) + reset + text.substring(end + offset)

  return text
}

/**
 * Changes the foreground color of text within a range
 */
export function foregroundRanged(text: string, color: Color, start: number, end: number) {
  checkIndex(text.length, start, end)

  const colorCode = getColorCode(color, "fg")

  text = text.substring(0, start) + colorCode + text.substring(start)

  const offset = colorCode.length
  text = text.substring(0, end + offset) + reset + text.substring(end + offset)

  return text
}

/**
 * Changes the background color of text within a range
 */
export function backgroundRanged(text: string, color: Color, start: number, end: number) {
  checkIndex(text.length, start, end)

  const colorCode = getColorCode(color, "bg")

  text = text.substring(0, start) + colorCode + text.substring(start)

  const offset = colorCode.length
  text = text.substring(0, end + offset) + reset + text.substring(end + offset)

  return text
}

export default full
