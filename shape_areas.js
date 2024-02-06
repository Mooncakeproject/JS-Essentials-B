function calcAreaRectangle(a ,b) {
    return a * b
}
function calcAreaTriangle(a, b) {
    return a * b / 2
}
function calcArea(a, b, shape) {
    if (shape === 'rectangle') {
        return calcAreaRectangle (a, b)
    } else if (shape === 'triangle') {
        return calcAreaTriangle(a, b)
    } else {
        return null
    }
} console.log(calcArea(100, 5, 'rectangle'));