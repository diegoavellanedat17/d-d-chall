// Function take coordinates of a node and return it rounded
export function gridSnap(x, y) {
    const snappedX = Math.round(x / 32) * 32
    const snappedY = Math.round(y / 32) * 32
    return [snappedX, snappedY]
  }
  