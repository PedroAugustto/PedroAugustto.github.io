var element;
var pos = 0;

function expandMenu() {
    if (element.className === "navbar") {
        element.className += " responsive";
    } else {
        element.className = "navbar";
    }
}

// function changeClass(){
//     pos++
//     pos % 2 == 0 ? element2.style.fontFamily = "Roboto"  : element2.style.fontFamily = "Jost";
// }

// function changeColor(){
//     element4.style.backgroundColor = element3.value;
// }

window.onload = function() {
    element = document.getElementById("idNavbar");
    hino = document.getElementById("hinoFundo");
    console.log(Object.keys(hino));
    hino.volume = 0.01;
};
