
// Inzidenz durch höchsten Wert
// 1 - neuer Wert
// 90 * neuster Wert

async function getApiData() {
    let response = await fetch("https://api.corona-zahlen.org/states");
    let data = await response.json();
    return data;
}


var colortest = "hue-rotate(" + 90 +"deg)"

function changeColor() {
    document.getElementById("background").style.filter = colortest;
}

function changeListHeight() {
    var img = document.getElementById("background");
    var currHeight = img.clientHeight;
    document.getElementById("bundesländer-liste").style.height = currHeight + "px";
}


window.onload = changeColor;
window.onload = changeListHeight;

window.onload = getApiData;

window.addEventListener('resize', changeListHeight);