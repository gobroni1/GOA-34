


document.getElementById("sqcalculate").addEventListener("click", (event) => {
    event.preventDefault();

    const sqside = document.getElementById("sqside").value;
    const answear = document.getElementById("answearholder");

    answear.innerText = (sqside * sqside);
});

document.getElementById("trcalculate").addEventListener("click", (event) => {
    event.preventDefault();

    const trsd1 = document.getElementById("trsd1").value;
    const trsd2 = document.getElementById("trsd2").value;

    const answear2 = document.getElementById("answearholder2");

    answear2.innerText = (trsd1*trsd1 + trsd2 * trsd2) ** 0.5; 
});