// JavaScript-Datei für die "Deutschland.html" Seite.

// Definition und Belegung der Variablen.
var requestURL = "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=BL,BL_ID,cases7_bl_per_100k,cases7_bl,death7_bl,last_update&returnGeometry=false&outSR=4326&f=json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

var hoechsteInzidenz = 1;

// Definition der Funktionen.
function changeListHeight() {
    var img = document.getElementById("background");
    var currHeight = img.clientHeight;
    document.getElementById("bundesländer-liste").style.height = currHeight + "px";
}

function compileData(id, inzidenz) {
    drehwinkel = (1 - (inzidenz / hoechsteInzidenz)) * 90;
    switch (id) {
        case "1":
            document.getElementById("sh-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("sh-liste").textContent = "Schleswig-Hollstein: " + inzidenz;
            break;
        case "2":
            document.getElementById("hh-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("hh-liste").textContent = "Hamburg: " + inzidenz;
            break;
        case "3":
            document.getElementById("ni-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("ni-liste").textContent = "Niedersachsen: " + inzidenz;
            break;
        case "4":
            document.getElementById("hb-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("hb-liste").textContent = "Bremen: " + inzidenz;
            break;
        case "5":
            document.getElementById("nw-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("nw-liste").textContent = "Nordrhein-Westfalen: " + inzidenz;
            break;
        case "6":
            document.getElementById("he-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("he-liste").textContent = "Hessen: " + inzidenz;
            break;
        case "7":
            document.getElementById("rp-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("rp-liste").textContent = "Rheinland-Pfalz: " + inzidenz;
            break;
        case "8":
            document.getElementById("bw-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("bw-liste").textContent = "Baden-Württemberg: " + inzidenz;
            break;
        case "9":
            document.getElementById("by-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("by-liste").textContent = "Bayern: " + inzidenz;
            break;
        case "10":
            document.getElementById("sl-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("sl-liste").textContent = "Saarland: " + inzidenz;
            break;
        case "11":
            document.getElementById("be-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("be-liste").textContent = "Berlin: " + inzidenz;
            break;
        case "12":
            document.getElementById("bb-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("bb-liste").textContent = "Brandenburg: " + inzidenz;
            break;
        case "13":
            document.getElementById("mv-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("mv-liste").textContent = "Mecklenburg-Vorpommern: " + inzidenz;
            break;
        case "14":
            document.getElementById("sn-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("sn-liste").textContent = "Sachsen: " + inzidenz;
            break;
        case "15":
            document.getElementById("st-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("st-liste").textContent = "Sachsen-Anhalt: " + inzidenz;
            break;
        case "16":
            document.getElementById("th-map").style.filter = "hue-rotate(" + drehwinkel +"deg)";
            document.getElementById("th-liste").textContent = "Thüringen: " + inzidenz;
            break;
            
    }
}

function handleResponse() {
    var response = request.response;

    for (var bl in response.features) {
        inzidenz = response.features[bl].attributes.cases7_bl_per_100k;

        if (inzidenz > hoechsteInzidenz) {
            hoechsteInzidenz = inzidenz;
        }
    };

    for (var bl in response.features) {
        id = response.features[bl].attributes.BL_ID;
        inz = response.features[bl].attributes.cases7_bl_per_100k;
        compileData(id, inz);
    };
}

// Initialisierung der Event-Listener.
window.addEventListener("load", changeListHeight);
request.addEventListener("load", handleResponse);

window.addEventListener('resize', changeListHeight);