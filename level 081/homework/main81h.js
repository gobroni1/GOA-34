let box = document.getElementById("around");

var t = setInterval(move, 10);
let posh = 0;
let posv = 180;

let posh2 = 360;
let posv2 = 10;

function move() {
    if (posh <= 360) { 
        posh += 1; 
        box.style.left = posh + "px"; 
    } else if (posv > 10) { 
        posv -= 1; 
        box.style.bottom = posv + "px"; 
    } else if (posh2 > 10) { 
        posh2 -= 1; 
        box.style.left = posh2 + "px"; 
    } else if (posv2 <= 180){
        posv2 += 1;
        box.style.bottom = posv2 + "px";
    }
}
