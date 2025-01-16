
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < document.all.length; i++) {
        if (document.all[i].tagName === "P") {
            document.all[i].style.color = "red";
        }
    }
});




const name = document.getElementById("name");
const info = document.getElementById("info");

name.onclick = function (){
    console.log("my name is hwo???");
}

// for (let i = 0; i < )