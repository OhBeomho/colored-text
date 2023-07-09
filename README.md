# coloring-text

Make your text colored!

## Examples

### Change all text color

```js
const { full, foreground, background } = require("coloring-text")

console.log(full("This is red text with yellow background", "red", "yellow"))
console.log(foreground("This is cyan text", "cyan"))
console.log(background("This is text with gray background", "gray"))
```

### Change text color in range

```js
const { fullRanged, foregroundRanged, backgroundRanged } = require("coloring-text")

console.log(fullRanged("This is red text with yellow background", "red", "yellow", 0, 4))
console.log(foregroundRanged("This is cyan text", "cyan", 8, 17))
console.log(backgroundRanged("This is text with gray background", "gray", 18, 33))
```