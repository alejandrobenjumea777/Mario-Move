const mario = document.getElementById("mario");
var posicionX=300;
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            posicionX = posicionX - 10;
            mario.style.transform = "scaleX(-1)";
            break;
         case "ArrowRight":
            posicionX = posicionX + 10;
            mario.style.transform = "scaleX(1)";
            break;


    }
    mario.style.left=posicionX + "px";
});