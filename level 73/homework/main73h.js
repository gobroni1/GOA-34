function changeText() {
    document.getElementById("myParagraph").innerText = "This is the new text!";

    document.getElementById("inp").style.color = "blue";
    document.getElementById("indiv").style.backgroundColor = "brown"

    document.getElementById("disp").style.display = "none";

    let fchs = document.getElementsByClassName("fch");

    for (let i = 0; i < fchs.length; i++) {
        fchs[i].style.fontWeight = "bold";
    }

    const img = document.getElementById("img");

    img.src = "img.png";

    const inputValue = document.getElementById("textinp").value;

    document.getElementById("ptp").innerText = inputValue;
}