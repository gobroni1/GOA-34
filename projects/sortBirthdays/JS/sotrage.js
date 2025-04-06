class User {
    constructor(fullName, birthDay, page) {
        this.fullName = fullName;
        this.birthDay = birthDay;
        this.page = page;
    }
}

let pageNames = JSON.parse(localStorage.getItem("pageNames")) || [];
if (pageNames.length === 0) {
    pageNames = ["main"];
    localStorage.setItem("pageNames", JSON.stringify(pageNames)); 
}


let statusOf1 = false;
let statusOf2 = false;
let currentPage = NaN; //change this to me the curent page user is on. 

function addPageNames() {
    document.getElementById("saveNewPageName").addEventListener("click", (e) => {
        e.preventDefault();
        const newPageName = document.getElementById("newPagename").value.trim();

        if (newPageName) { 
            pageNames.push(newPageName); 
            localStorage.setItem("pageNames", JSON.stringify(pageNames));  
            document.getElementById("newPagename").value = ""; 
            currentPage = newPageName;
            localStorage.setItem("currentPage", JSON.stringify(currentPage));
        } 
        location.reload();
    });
}

currentPage = JSON.parse(localStorage.getItem("currentPage")) || "main";
function renderPages() {
    const pageBoard = document.getElementById("pageNameHolder");
    pageBoard.innerHTML = ""; 

    if (pageNames.length > 0) {
        pageNames.forEach((page) => {
            const pageDiv = document.createElement("div");
            pageDiv.classList.add("pagedivs");
            pageDiv.id = page;

            const pageName = document.createElement("p");
            pageName.classList.add("pageNameP");
            pageName.textContent = page;

            if (page === currentPage) {
                pageDiv.style.backgroundColor = "gold";
            }

            // pageDiv.addEventListener("click", () => {
            //     document.querySelectorAll(".pagedivs").forEach(div => {
            //         div.style.backgroundColor = "";
            //     });
            //     currentPage = page;
            //     localStorage.setItem("currentPage", JSON.stringify(currentPage));

            //     pageDiv.style.backgroundColor = "gold";
            // });


            pageDiv.addEventListener("mousedown", startPress);
            pageDiv.addEventListener("mouseup", endPress);
            pageDiv.addEventListener("mouseleave", cancelPress); 

            pageDiv.addEventListener("touchstart", startPress);
            pageDiv.addEventListener("touchend", endPress);
            pageDiv.addEventListener("touchcancel", cancelPress);

            let pressTimer = null;

            function startPress(event) {
                pressTimer = setTimeout(() => {
                    if (event.target.textContent !== "main"){
                        removePage(event.target.textContent);
                    }else{
                        alert("can't delet main page")
                    }
                    pressTimer = null; 
                }, 500); 
            }

            function endPress(event) {
                if (pressTimer) {
                    clearTimeout(pressTimer);
                    pressTimer = null;

                    // click
                    document.querySelectorAll(".pagedivs").forEach(div => {
                        div.style.backgroundColor = "";
                    });
                    currentPage = event.target.textContent;
                    localStorage.setItem("currentPage", JSON.stringify(currentPage));

                    event.target.style.backgroundColor = "gold";
                }
            }

            function cancelPress() {
                if (pressTimer) {
                    clearTimeout(pressTimer);
                    pressTimer = null;
                }
            }
            pageDiv.appendChild(pageName);
            pageBoard.appendChild(pageDiv);
        });
    }
}

function removePage(pageToRemove) {
    pageNames = pageNames.filter(page => page !== pageToRemove);
    localStorage.setItem("pageNames", JSON.stringify(pageNames));

    if (currentPage === pageToRemove) {
        currentPage = "main"; 
        localStorage.setItem("currentPage", JSON.stringify(currentPage));
    }

    renderPages();
}




function addUser() {
    const fullName = document.getElementById("fullName").value;
    const birthDay = document.getElementById("birthDate").value;
    
    const newUser = new User(fullName, birthDay, currentPage);

    let users = JSON.parse(localStorage.getItem("users")) || []; 

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    displayAll();
}

document.getElementById("save").addEventListener("click", addUser);

// display all the users
document.addEventListener("DOMContentLoaded", function () {
    displayAll();
    renderPages();
});

function deletUser(name) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    users = users.filter(user => user.fullName !== name);

    localStorage.setItem("users", JSON.stringify(users));

    displayAll();
    location.reload();
}

function displayAll() {
    addPageNames();
    let usersToDisplay = JSON.parse(localStorage.getItem("users")) || [];
    const mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML = "";

    statusOf1 = JSON.parse(localStorage.getItem("statusOf1")) || false;
    statusOf2 = JSON.parse(localStorage.getItem("statusOf2")) || false;

    if (statusOf1){
        document.getElementById("toggle1").classList.toggle("active");

    }
    if(statusOf2){
        document.getElementById("toggle2").classList.toggle("active");
    }

    if (usersToDisplay) {

        // const monthDropdown = document.getElementById("months");
        // let selectedMonth = ""; 
        // monthDropdown.addEventListener("change", function() {
        //     selectedMonth = this.value; 
        //     console.log("Selected month:", selectedMonth);
        // });

        usersToDisplay = sortByDate(usersToDisplay.filter(user => user.page === currentPage));

        usersToDisplay.forEach((user, index) => {
            if (user.page === currentPage){
                const userDiv = document.createElement("div");
                userDiv.classList.add("userDiv");
                userDiv.id = user.fullName;
                
                const nameP = document.createElement("p");
                nameP.id = "nameP";
                nameP.textContent = user.fullName;
    
                const dateP = document.createElement("p");
                dateP.id = "dateP";
                
                if (!statusOf1){
                    dateP.textContent = rotateDate(user.birthDay);
                }else{
                    dateP.textContent = rotateDate(user.birthDay).slice(0,-5);
                }
    
                const binImage = document.createElement("img");
                binImage.classList.add("binIcon")
                binImage.id = user.fullName;
                binImage.src = "../HTML/bin.png";
                binImage.addEventListener("click", () => {
                    deletUser(binImage.id);  
                });
    
                const dateandbinholder = document.createElement("div");
                dateandbinholder.classList.add("binanddateholder");
    
                if (!statusOf2){
                    userDiv.appendChild(nameP);
                }else{
                    const fillerForName = document.createElement("p");
                    userDiv.appendChild(fillerForName)
                }
                
                dateandbinholder.appendChild(dateP);
                dateandbinholder.appendChild(binImage);
    
                userDiv.appendChild(dateandbinholder);
    
                if (index === 0) {
                    dateP.style.marginRight = "2vh";
                    nameP.style.marginLeft = "2vh";
                    const mosteResentOne = document.getElementById("mostecurent");
                    if (!statusOf2){
                        mosteResentOne.appendChild(nameP);
                    }else{
                        const fillerForName = document.createElement("p");
                        mosteResentOne.appendChild(fillerForName)
                    }
                    mosteResentOne.appendChild(dateP);
                    mosteResentOne.style.backgroundColor = "gold";
                }else {
                    mainDiv.appendChild(userDiv);
                }
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


// open & close filter's pop up
const filtersicon = document.getElementById("filters");
filtersicon.addEventListener ("click", ()=>popup1("flex"));

const aplay = document.getElementById("aplay");
aplay.addEventListener("click", aplayfilter);

const clsfilters = document.getElementById("cancelfilter");
clsfilters.addEventListener("click", ()=>popup1("none"));

function popup1 (i){
    const popUp = document.getElementById("popupbg");
    popUp.style.display = i;
}
function aplayfilter (){
    const popUp = document.getElementById("popupbg");
    popUp.style.display = "none";
    location.reload();
}

//

function toggleSwitch(element, id) {
    element.classList.toggle("active");

    if (id === 1) {
        statusOf1 = !statusOf1;
        localStorage.setItem("statusOf1", JSON.stringify(statusOf1));
    } else if (id === 2) {
        statusOf2 = !statusOf2;
        localStorage.setItem("statusOf2", JSON.stringify(statusOf2));
    }
}

const searchBar = document.getElementById("searchBar");
const searchResultsDiv = document.getElementById("searchResults");

searchBar.addEventListener("input", function () {
    const searchValue = searchBar.value;
    searchResultsDiv.innerHTML = ""; 

    let names = JSON.parse(localStorage.getItem("users")) || [];

    names.forEach(obj => {
        if (searchValue && obj.fullName.toLowerCase().includes(searchValue.toLowerCase())) {  
            const result = document.createElement("div");
            result.classList.add("resultDiv");
            result.textContent = `${obj.fullName} - ${(obj.birthDay).slice(5)} - ${obj.page}`;

            result.id = obj.fullName;  
            searchResultsDiv.appendChild(result);
        }
    });
});


const copybtn = document.getElementById("copylocalstorage");

copybtn.addEventListener("click", ()=>{
    let siteData= JSON.stringify(localStorage.getItem("users"));

    navigator.clipboard.writeText(siteData);

    let message = document.getElementById("copyMessage");

    message.style.display = "flex";
    setTimeout(() => {
        message.style.opacity = "1";
        message.style.transform = "translate(-50%, 10px)"; 
    }, 10);


    setTimeout(() => {
        message.style.opacity = "0";
        message.style.transform = "translate(-50%, -100%)"; 
    }, 2000);

    setTimeout(() => {
        message.style.display = "none";
    }, 2500);

});


const importData = document.getElementById("importData");

importData.addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("sideBar").style.display = "none";
    document.getElementById("importDataPopUpBg").style.display = "flex";
});

document.getElementById("saveImportedData").addEventListener("click", (e)=>{
    e.preventDefault();

    let dataToSave = document.getElementById("dataTakeIn").value;
    dataToSave = dataToSave.slice(1, -1);
    dataToSave = dataToSave.replace(/\\/g, "");

    let importedData = JSON.parse(dataToSave);

    localStorage.setItem('users', JSON.stringify(importedData));

    location.reload();
});


function rotateDate(dateString) {
    let dateParts = dateString.split("-");

    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
}

