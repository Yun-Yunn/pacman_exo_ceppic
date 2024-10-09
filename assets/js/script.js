let pacman = document.getElementById("pacman");
let playground = document.getElementById("playground");
// tactil Hammer var fini remplace let (var utiliser 2015 et avant) librairie cdnhammer : https://cdnjs.com/libraries/hammer.js
//MyElement on remplace le playground la ou on veux utiliser le doigt
// on = addEventListener
let hammertime = new Hammer(playground);


let posX = 0, posY = 0;
console.dir(playground);
let witdhPlayground = playground.clientWidth;
let heightPlayground = playground.clientHeight;
let varInutile;
varInutile = 245;
varInutile = "bonjour";
varInutile = false;
// affiche les infos dans le log
console.log(posX, posY);
console.log(varInutile);
console.dir(pacman);
// declaration de fonction
function movePacman(direction) {
    // condition qui definit les limites de deplacement de mon pacman
    // direction
    // posX > 0 => "gauche" (la position a gauche)
    // posY > 0 => "haut"
    // posX < withplayground - 200 => "droite"
    // posY < heignPlayground - 200 => "bas"
    switch (direction) {
        case "gauche":
            if (posX > 0) {
                posX -= 50;
            }
            break;
        case "haut":
            if (posY > 0) {
                posY -= 50;
            }
            break;
        case "droite":
            if (posX < witdhPlayground - 200) {
                posX += 50;
            }
            break;
        case "bas":
            if (posY < heightPlayground - 200) {
                posY += 50;
            }
            break;
        default:
            break;
    }
    pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
}
// window pour javascript represente "le navigateur"
window.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 37://gauche
        case 81://Q
            movePacman("gauche");
            break;
        case 39://droite
        case 68://D
            movePacman("droite")
            break;
        case 38://haut
        case 90://Z
            movePacman("haut")
            break;
        case 40://bas
        case 83://S
            movePacman("bas")
            break;
        default:
            break;
    }
});

// GESTION TACTILE
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
hammertime.on("swipeleft swiperight swipeup swipedown", function (ev) {
    console.dir(ev);
    switch (ev.type) {
        case "swipeleft"://gauche
            movePacman("gauche")
            break;
        case "swiperight":
            movePacman("droite")
            break;
        case "swipeup":
            movePacman("haut")
            break;
        case "swipedown":
            movePacman("bas")
            break;
        default:
            break;
    }
});