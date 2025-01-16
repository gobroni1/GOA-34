let box = document.getElementById("the-div");

var t = setInterval(move, 10);
let pos = 0;

function move () {
    if (pos >= 320) {
        pos = -30;
    }
    else {
        pos += 1;
        box.style.left = pos+"px"
    }
}