let userTime = 10;

const interval = setInterval (function () {
    userTime --;
    document.getElementById("tensec").innerText = userTime;
    if (userTime === 0) {
        document.getElementById("tensec").innerText = "times up";
        clearInterval(interval);
    }
}, 1000);

const currentDate = new Date();

document.getElementById("curtime").innerText = currentDate.toUTCString();



const colorPalat = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A8",
    "#FFD133",
    "#A833FF",
    "#33FFF3",
    "#FF8C33",
    "#33D4FF",
    "#FF33E1"
];

let i = 0;

setInterval(() => {
    document.getElementById("bgch").style.backgroundColor = colorPalat[i];
    i = (i + 1) % colorPalat.length; 
}, 3000);