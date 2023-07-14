type Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray"
type Style = "bright" | "dim" | "underscore" | "blink" | "reverse" | "hidden"

const colorList: Color[] = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray"
]
const styleList: Style[] = ["bright", "dim", "underscore", "blink", "reverse", "hidden"]
const styleCodes = ["\x1b[1m", "\x1b[2m", "\x1b[4m", "\x1b[5m", "\x1b[7m", "\x1b[8m"]
const reset = "\x1b[0m"

function getColorCode(color: Color, type: "fg" | "bg") {
  return color !== "gray"
    ? `\x1b[${(type === "fg" ? 30 : 40) + colorList.indexOf(color)}m`
    : `\x1b[${type === "fg" ? 90 : 100}m`
}

function getStyleCode(style: Style) {
  return styleCodes[styleList.indexOf(style)]
}

function checkIndex(textLength: number, start?: number, end?: number) {
  if (
    (start && (start > textLength || start < 0)) ||
    (end && (end > textLength || end < 0)) ||
    (start && end && (start === end || start > end))
  ) {
    throw new RangeError()
  }
}

/**
 * Changes the color of text
 */
export function color(text: string, foreground: Color, background?: Color) {
  return (
    getColorCode(foreground, "fg") +
    (background ? getColorCode(background, "bg") : "") +
    text +
    reset
  )
}

/**
 * Changes the style of text
 */
export function style(text: string, ...styles: Style[]) {
  return styles.map((style) => getStyleCode(style)).join("") + text + reset
}
