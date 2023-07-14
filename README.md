# coloring-text

Make your text colored!

## Install

```
npm i coloring-text
```

## Examples

### Change the color of text

```js
const { color } = require("coloring-text")

console.log(color("red text", "red"))
console.log(`This is ${color("black text with yellow background", "black", "yellow")}`)
```

### Change the style of text

```js
const { style } = require("coloring-text")

console.log(style("blinking text", "blink"))
console.log(style("bright and underscored text", "bright", "underscore"))
```
