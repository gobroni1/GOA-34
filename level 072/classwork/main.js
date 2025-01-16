let Time = 10; 

const interval = setInterval(function () {
    Time --;
    document.getElementById("tp").innerText= Time;
    if (Time === 0){
        document.getElementById("tp").innerText = "times up";
        clearInterval(interval);
    }
}, 1000);