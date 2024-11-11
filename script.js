let stick;

function startGame() {
    stick = document.getElementById("stick");
    stick.style.height = "0px";
    growStick();
}

function growStick() {
    let height = 0;
    const growInterval = setInterval(() => {
        if (height < 150) { // Maximum stick length
            height += 5;
            stick.style.height = `${height}px`;
        } else {
            clearInterval(growInterval);
            dropStick();
        }
    }, 100);
}

function dropStick() {
    stick.style.transition = "transform 0.5s";
    stick.style.transform = "rotate(90deg)";
}
