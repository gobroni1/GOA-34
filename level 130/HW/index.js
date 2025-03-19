const jokeCat = document.getElementById("joke-category");
const mainDiv = document.getElementById("display");

async function displayJoke(category) {

    const mainDiv = document.getElementById("display");
    console.log("Selected category:", category);
    const API = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

    let response = await fetch(API);
    

    let data = await response.json();
    console.log("Fetched data:", data); 
    if (data.type === 'single') {
        const joke = data.joke;
        const jokeh3 = document.createElement("h3");
        jokeh3.textContent = joke;
        jokeh3.style.color = "black";
        mainDiv.appendChild(jokeh3)
    } else if (data.type === 'twopart') {
        const joke = `${data.setup} - ${data.delivery}`;
        const jokeh3 = document.createElement("h3");
        jokeh3.textContent = joke;
        jokeh3.style.color = "black";
        console.log(joke);
    }

}

jokeCat.addEventListener("change", (e) => {  
    const selectedCategory = e.target.value;
    displayJoke(selectedCategory);  
});
