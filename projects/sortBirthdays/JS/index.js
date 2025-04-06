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

// clear

const clearP = document.getElementById("clearLocalStorage");
clearP.addEventListener("click", function(){
    document.getElementById("sideBar").style.display = "none";
    document.getElementById("deletpopUp").style.display="flex";
});

const button1 = document.getElementById("clearno");
const button2 = document.getElementById("clearyes");

button1.addEventListener("click", (e)=>{
    e.preventDefault();

    document.getElementById("deletpopUp").style.display="none";

})


button2.addEventListener("click", ()=>{
    localStorage.clear();
    document.getElementById("deletpopUp").style.display="none";
    location.reload();
    // alert("all data has been deleted");
});


// CLOSE DATA IMPORT POP UP 

document.getElementById("calcnleImportData").addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("importDataPopUpBg").style.display = "none";
});

// close page board

const x = document.getElementById("closePagesPopUp");

x.addEventListener("click", closePageBoard);

function closePageBoard(){
    document.getElementById("pagespopupbg").style.display="none";
    location.reload();
}

document.getElementById("openboardp").addEventListener("click", (e)=>{
    e.preventDefault();

    const sidebar = document.getElementById("sideBar");
    sidebar.style.display = "none";

    document.getElementById("pagespopupbg").style.display="flex ";
});

// open add page pop up 

document.getElementById("addPage").addEventListener("click", (e)=>{
    e.preventDefault();

    document.getElementById("addPagepopupbg").style.display = "flex";
    const sidebar = document.getElementById("sideBar");
    sidebar.style.display = "none";
});

document.getElementById("closePageCreation").addEventListener("click", ()=>{
    document.getElementById("addPagepopupbg").style.display = "none";
    location.reload();
});