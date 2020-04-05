export default function snapToGrid(x, y) {
    const snappedX = Math.round(x / 85) * 85
    const snappedY = Math.round(y / 85) * 85
    return [snappedX, snappedY]
  }
  