class User {
    constructor(fullName, birthDay) {
        this.fullName = fullName;
        this.birthDay = birthDay;
    }
}

function addUser() {
    const fullName = document.getElementById("fullName").value;
    const birthDay = document.getElementById("birthDate").value;

    const newUser = new User(fullName, birthDay);

    let users = JSON.parse(localStorage.getItem("users")) || []; // If there is nothing in local storage, create new array

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    displayAll();
}

document.getElementById("save").addEventListener("click", addUser);

// Display all the users
document.addEventListener("DOMContentLoaded", function () {
    displayAll();
});

function deletUser (name, users){
    users = users.filter(user => user.fullName !== name);
    
    return users

}

function displayAll() {
    let usersToDisplay = JSON.parse(localStorage.getItem("users")) || [];
    const mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML = "";

    if (usersToDisplay) {
        usersToDisplay = sortByDate(usersToDisplay);
        console.log(usersToDisplay);

        usersToDisplay.forEach((user, index) => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("userDiv");

            const nameP = document.createElement("p");
            nameP.id = "nameP";
            nameP.textContent = user.fullName;

            const dateP = document.createElement("p");
            dateP.id = "dateP";
            dateP.textContent = user.birthDay;

            const binImage = document.createElement("img");
            binImage.classList.add("binIcon")
            binImage.id = user.fullName;
            binImage.src = "../HTML/bin.png";
            binImage.addEventListener("click", ()=>{
               usersToDisplay = usersToDisplay.filter(user => user.fullName !== binImage.id);
                console.log(usersToDisplay);
            });

            const dateandbinholder = document.createElement("div");
            dateandbinholder.classList.add("binanddateholder");

            userDiv.appendChild(nameP);

            dateandbinholder.appendChild(dateP);
            dateandbinholder.appendChild(binImage);

            userDiv.appendChild(dateandbinholder);

            if (index === 0) {
                dateP.style.marginRight = "2vh";
                nameP.style.marginLeft = "2vh";
                const mosteResentOne = document.getElementById("mostecurent");
                mosteResentOne.appendChild(nameP);
                mosteResentOne.appendChild(dateP);
                mosteResentOne.style.backgroundColor = "gold";
            } else {
                mainDiv.appendChild(userDiv);
            }
        });
    }
}

function sortByDate(users) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return users.sort((a, b) => {
        const daysUntilA = getDaysUntilNextBirthday(new Date(a.birthDay), today);
        const daysUntilB = getDaysUntilNextBirthday(new Date(b.birthDay), today);

        return daysUntilA - daysUntilB; 
    });
}

function getDaysUntilNextBirthday(birthDate, today) {
    const currentYear = today.getFullYear();
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    const timeDiff = nextBirthday - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
}




// let statusOf1 = false;

// function toggleSwitch(element, id) {
//     element.classList.toggle("active");
//     if (element.classList.contains("active")) {
//         // console.log(`Active ${id}`);
//         if (id === 1){
//             statusOf1 =true;
//         }
//     } else {
//         // console.log(`Non-active ${id}`);
//         if (id === 1){
//             statusOf1 = false;
//         }
//     }
// }

// document.getElementById("toggle1").addEventListener("click", ()=>{
//     console.log(statusOf1); 
// })
