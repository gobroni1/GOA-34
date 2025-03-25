// open & close setting's side bar
const settingsIcon = document.getElementById("settings");
settingsIcon.addEventListener("click", ()=>Sidebar("block"));

const colaps = document.getElementById("colaps");
colaps.addEventListener("click", ()=>Sidebar("none"));

function Sidebar (i){
    const sidebar = document.getElementById("sideBar");
    sidebar.style.display = i;
}

//

// open & close filter's pop up
const filtersicon = document.getElementById("filters");
filtersicon.addEventListener ("click", ()=>popup1("flex"));

// const aplay = document.getElementById("aplay");
// aplay.addEventListener("click", ()=>popup1("none"));

const clsfilters = document.getElementById("cancelfilter");
clsfilters.addEventListener("click", ()=>popup1("none"));

function popup1 (i){
    const popUp = document.getElementById("popupbg");
    popUp.style.display = i;
}
//

// open and close add user pop up
const addP = document.getElementById("addpeoplep");
addP.addEventListener("click", ()=>openpopup2("flex"));

const closepopup2 = document.getElementById("cancle");
closepopup2.addEventListener("click", addition);

function openpopup2 (i){
    const popup2 = document.getElementById("popup2bg");
    popup2.style.display = i;  

    Sidebar("none");
    
}

function addition (){
    const popup2 = document.getElementById("popup2bg");
    popup2.style.display = "none";  

    Sidebar("none");
    location.reload();
}
// 

// search box detection

const search = document.getElementById("searchBar");
const searchResults = document.getElementById("searchResults");
const testButton = document.getElementById("test");

search.addEventListener("focus", FnSearch);

document.addEventListener("mousedown", (event) => {
    if (!search.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = "none";
    }
});

function FnSearch() {
    searchResults.style.display = "block";
}

