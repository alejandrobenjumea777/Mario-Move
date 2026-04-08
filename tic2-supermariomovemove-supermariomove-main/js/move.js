const mario = document.getElementById("mario");
const pantalla = document.getElementById("pantalla");
let posicionX = 300;

// Utilidad para limitar un valor entre min y max
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

document.addEventListener("keydown", (event) => {
    const paso = 10; // píxeles por pulsación

    // Calculamos los límites dinámicamente usando el ancho del contenedor
    const containerWidth = pantalla ? pantalla.clientWidth : window.innerWidth;
    const marioWidth = mario.offsetWidth || parseInt(getComputedStyle(mario).width, 10) || 25;
    const minX = 0;
    const maxX = containerWidth - marioWidth;

    switch (event.key) {
        case "ArrowLeft":
            posicionX -= paso;
            mario.style.transform = "scaleX(-1)";
            break;
        case "ArrowRight":
            posicionX += paso;
            mario.style.transform = "scaleX(1)";
            break;
        default:
            // no hacemos nada con otras teclas
            return;
    }

    // Limitamos la posición para que Mario no salga de los bordes
    posicionX = clamp(posicionX, minX, maxX);
    mario.style.left = posicionX + "px";
});

// (Lógica de audio eliminada: el proyecto ya no reproduce música)

