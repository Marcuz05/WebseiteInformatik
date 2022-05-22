// JavaScript-Datei für die "Deutschland.html" Seite.

// Definition und Belegung der Variablen.
var requestURL = "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=BL,BL_ID,cases7_bl_per_100k,cases7_bl,death7_bl,last_update&returnGeometry=false&outSR=4326&f=json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

var hoechsteFaelle = 1;

// Definition der Funktionen.
function changeListHeight() {
    var img = document.getElementById("background");
    var currHeight = img.clientHeight;
    document.getElementById("bundesländer-liste").style.height = currHeight + "px";
}

function compileData(id, faelle) {
    drehwinkel = (1 - (faelle / hoechsteFaelle)) * 90;
    switch (id) {
        case "1":
            document.getElementById("sh-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("sh-liste").textContent = "Schleswig-Hollstein: " + faelle;
            break;
        case "2":
            document.getElementById("hh-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("hh-liste").textContent = "Hamburg: " + faelle;
            break;
        case "3":
            document.getElementById("ni-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("ni-liste").textContent = "Niedersachsen: " + faelle;
            break;
        case "4":
            document.getElementById("hb-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("hb-liste").textContent = "Bremen: " + faelle;
            break;
        case "5":
            document.getElementById("nw-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("nw-liste").textContent = "Nordrhein-Westfalen: " + faelle;
            break;
        case "6":
            document.getElementById("he-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("he-liste").textContent = "Hessen: " + faelle;
            break;
        case "7":
            document.getElementById("rp-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("rp-liste").textContent = "Rheinland-Pfalz: " + faelle;
            break;
        case "8":
            document.getElementById("bw-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("bw-liste").textContent = "Baden-Württemberg: " + faelle;
            break;
        case "9":
            document.getElementById("by-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("by-liste").textContent = "Bayern: " + faelle;
            break;
        case "10":
            document.getElementById("sl-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("sl-liste").textContent = "Saarland: " + faelle;
            break;
        case "11":
            document.getElementById("be-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("be-liste").textContent = "Berlin: " + faelle;
            break;
        case "12":
            document.getElementById("bb-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("bb-liste").textContent = "Brandenburg: " + faelle;
            break;
        case "13":
            document.getElementById("mv-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("mv-liste").textContent = "Mecklenburg-Vorpommern: " + faelle;
            break;
        case "14":
            document.getElementById("sn-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("sn-liste").textContent = "Sachsen: " + faelle;
            break;
        case "15":
            document.getElementById("st-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("st-liste").textContent = "Sachsen-Anhalt: " + faelle;
            break;
        case "16":
            document.getElementById("th-map").style.filter = "hue-rotate(" + drehwinkel + "deg)";
            document.getElementById("th-liste").textContent = "Thüringen: " + faelle;
            break;

    }
}

function handleResponse() {
    var response = request.response;

    for (var bl in response.features) {
        faelle = response.features[bl].attributes.cases7_bl;

        if (faelle > hoechsteFaelle) {
            hoechsteFaelle = faelle;
        }
    };

    for (var bl in response.features) {
        id = response.features[bl].attributes.BL_ID;
        fae = response.features[bl].attributes.cases7_bl;
        compileData(id, fae);
    };
    
    var datenstand = response.features[1].attributes.last_update;
    document.getElementById("last-updated").textContent = "Stand der Daten: " + datenstand;
}

// Initialisierung der Event-Listener.
window.addEventListener("load", changeListHeight);
request.addEventListener("load", handleResponse);

window.addEventListener('resize', changeListHeight);
