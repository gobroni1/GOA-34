async function GetJoke () {
    let Joke = ""

    const RawJoke = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    const ReJoke = await RawJoke.json()
    Joke = ReJoke.joke;

    document.getElementById('joke-div').textContent = Joke;
}

document.getElementById("getJoke").addEventListener("click", GetJoke);