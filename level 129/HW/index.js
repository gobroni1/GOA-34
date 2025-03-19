const btn = document.getElementById("nextUser");

async function getUsr() {
    const mainDiv = document.getElementById("main-div");
    const API = "https://jsonplaceholder.typicode.com/users";


    let response = await fetch(API);
    let data = await response.json();

    let index = Math.floor(Math.random() * data.length); 
    let randomUser = data[index]; 
    mainDiv.innerHTML = "";


    const Name = document.createElement("h3");
    Name.textContent = randomUser.name;
    Name.style.color = "black";
    mainDiv.appendChild(Name);

    const email = document.createElement("h3");
    email.textContent = randomUser.email;
    email.style.color = "black";
    mainDiv.appendChild(email);

}

btn.addEventListener("click", getUsr);
