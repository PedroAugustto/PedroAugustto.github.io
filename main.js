const elenco = [
    {  
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1473/FABIO-3x4_%281%29_slider.png?1683760626",
        "num": 1,
        "position": "Goleiro",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Fábio"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1501/SAMUEL-XAVIER-3x4_slider.png?1683761922",
        "num": 2,
        "position": "Lateral Direito",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Samuel Xavier"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1508/MARLON_3x4_slider.png?1690902174",
        "num": 4,
        "position": "Zagueiro",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Marlon"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1480/ALEXSANDER-3x4_slider.png?1683760936",
        "num": 5,
        "position": "Volante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Alexsander"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1490/JORGE-3x4_slider.png?1683761380",
        "num": 6,
        "position": "Lateral Esquerdo",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Jorge"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1481/ANDRE-3x4_slider.png?1683760992",
        "num": 7,
        "position": "Volante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "André"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1498/MARTINELLI-3x4_slider.png?1683761740",
        "num": 8,
        "position": "Volante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Martinelli"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1489/JOHN-KENNEDY-3x4_slider.png?1683761346",
        "num": 9,
        "position": "Atacante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "John Kennedy"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1500/PH-GANSO-3x4_slider.png?1683761856",
        "num": 10,
        "position": "Meia",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Ganso"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1491/KENO-3x4_slider.png?1683761426",
        "num": 11,
        "position": "Atacante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Keno"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1496/MARCELO-3x4_slider.png?1683761661",
        "num": 12,
        "position": "Lateral Esquerdo",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Marcelo"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1485/GERMAN-CANO-3x4_slider.png?1683761188",
        "num": 14,
        "position": "Atacante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/22px-Flag_of_Argentina.svg.png",
        "name": "Germán Cano"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1507/YONY_PNG_%281%29_slider.png?1688673742",
        "num": 15,
        "position": "Zagueiro",
        "name": "Yony González",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/22px-Flag_of_Colombia.svg.png"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1504/DIOGO-BARBOSA-3x4_%281%29_slider.png?1688394691",
        "num": 16,
        "position": "Lateral Esquerdo",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Diogo Barbosa"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1505/17_LEO_FERNANDEZ_3X4_slider.png?1688671808",
        "num": 17,
        "position": "Meia",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/22px-Flag_of_Uruguay.svg.png",
        "name": "Leo Fernández"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1492/LELE-3x4_slider.png?1683761461",
        "num": 18,
        "position": "Atacante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Lelê"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1488/JHON-ARIAS-3x4_slider.png?1683761307",
        "num": 21,
        "position": "Meia",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/22px-Flag_of_Colombia.svg.png",
        "name": "Jhon Arias"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1477/PEDRO-RANGEL-3x4_%281%29_slider.png?1683760724",
        "num": 22,
        "position": "Goleiro",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Pedro Rangel"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1487/GUGA-3x4_slider.png?1683761268",
        "num": 23,
        "position": "Lateral Direito",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Guga"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1495/MANOEL-3x4_slider.png?1683761616",
        "num": 26,
        "position": "Zagueiro",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Manoel"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1483/FELIPE-MELO-3x4_slider.png?1683761091",
        "num": 29,
        "position": "Volante/Zagueiro",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Felipe Melo"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1502/THIAGO-SANTOS-3x4_slider.png?1683761971",
        "num": 30,
        "position": "Volante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Thiago Santos"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1499/NINO-3x4_slider.png?1683761815",
        "num": 33,
        "position": "Zagueiro",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Nino"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1486/GIOVANNI-3x4_slider.png?1683761221",
        "num": 37,
        "position": "Atacante",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Giovanni"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1482/DAVID-BRAZ-3x4_slider.png?1683761034",
        "num": 44,
        "position": "Zagueiro",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "David Braz"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1493/LIMA-3x4_slider.png?1683761498",
        "num": 45,
        "position": "Meia",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Lima"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1506/55_DANIEL_3X4_slider.png?1688671951",
        "num": 55,
        "position": "Meia",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Daniel"
    },
    {
        "img": "https://s3.amazonaws.com/assets-fluminense/player_pictures/1476/VITOR-EUDES-3x4_%281%29_slider.png?1683760684",
        "num": 98,
        "position": "Goleiro",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Vitor Eudes"
    },
    {
        "img": "img/diniz.png",
        "num": "",
        "position": "Técnico",
        "nationality": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        "name": "Fernando Diniz"
    }
  ];

var cards;

function addCards() {
let htmlString = ""

elenco.forEach((e) => {
    htmlString += `<div class="card">
                        <div style="width:100%; height:300px; overflow:hidden">
                            <img src="${e.img}">
                        </div>
                        <h2>${e.num} - ${e.name}</h2>

                        ${e.position} - <img src="${e.nationality}"></img>
                        
                    </div>`;
});

cards.innerHTML = htmlString;
};

function expandMenu() {
    if (element.className === "navbar") {
        element.className += " responsive";
    } else {
        element.className = "navbar";
    }
}

window.onload = function() {
    cards = document.getElementById("idElenco");
    if(cards) {
        addCards()
    }
    element = document.getElementById("idNavbar");
    hino = document.getElementById("hinoFundo");
    if(!!hino){
        hino.volume = 0.01;
        hino.play();
    }
}
