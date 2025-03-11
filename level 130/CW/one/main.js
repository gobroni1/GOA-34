async function DogImage (){
    let URL = ""

    const newimg = await fetch("https://api.thecatapi.com/v1/images/search");
    const immg = await newimg.json();
    URL = immg[0].url;

    const dogdiv = document.getElementById("dog");
    dogdiv.innerHTML = `<img src="${URL}" alt="Random Animal" />`
}

document.getElementById("getimg").addEventListener("click", DogImage);