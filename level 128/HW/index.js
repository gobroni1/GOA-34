async function generateImage() {
    const catChecked = document.getElementById("catCheckbox").checked;
    const dogChecked = document.getElementById("dogCheckbox").checked;
    const foxChecked = document.getElementById("foxCheckbox").checked;

    let imageUrl = '';


    if (catChecked) {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        imageUrl = data[0].url;
    } else if (dogChecked) {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        imageUrl = data.message;
    } else if (foxChecked) {
        const response = await fetch("https://randomfox.ca/floof/");
        const data = await response.json();
        imageUrl = data.image;
    }


    const imageDiv = document.getElementById("animalImage");
    if (imageUrl) {
        imageDiv.innerHTML = `<img src="${imageUrl}" alt="Random Animal" />`;
    } else {
        imageDiv.innerHTML = "no selection";
    }
}