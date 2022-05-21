
// Inzidenz durch höchsten Wert
// 1 - neuer Wert
// 90 * neuster Wert

var colortest = "hue-rotate(" + 90 +"deg)"

function changeColor() {
    document.getElementById("background").style.filter = colortest;
}

window.onload = changeColor;