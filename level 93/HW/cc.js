let cookies = 0;
let gold = 0;
let cookiesPerClick = 1;
let goldPerClick = 1;

let bigFingerCost = 50;
let betterMinesCost = 100;
let doubleCookiesCost = 200;

const cookieElement = document.getElementById("cookie");
const cookieCountElement = document.getElementById("cookieCount");
const goldCountElement = document.getElementById("goldCount");

const bigFingerBtn = document.getElementById("bigFingerBtn");
const betterMinesBtn = document.getElementById("betterMinesBtn");
const doubleCookiesBtn = document.getElementById("doubleCookiesBtn");

const bigFingerCostElement = document.getElementById("bigFingerCost");
const betterMinesCostElement = document.getElementById("betterMinesCost");
const doubleCookiesCostElement = document.getElementById("doubleCookiesCost");


function updateDisplay() {
    cookieCountElement.textContent = cookies;
    goldCountElement.textContent = gold;

    bigFingerCostElement.textContent = bigFingerCost;
    betterMinesCostElement.textContent = betterMinesCost;
    doubleCookiesCostElement.textContent = doubleCookiesCost;

    bigFingerBtn.disabled = gold < bigFingerCost;
    betterMinesBtn.disabled = cookies < betterMinesCost;
    doubleCookiesBtn.disabled = gold < doubleCookiesCost;
}


cookieElement.addEventListener("click", () => {
    cookies += cookiesPerClick;
    gold += goldPerClick;
    updateDisplay();
});


bigFingerBtn.addEventListener("click", () => {
    if (gold >= bigFingerCost) {
        gold -= bigFingerCost;
        cookiesPerClick += 1;
        bigFingerCost *= 2;
        updateDisplay();
    }
});


betterMinesBtn.addEventListener("click", () => {
    if (cookies >= betterMinesCost) {
        cookies -= betterMinesCost;
        goldPerClick += 1;
        betterMinesCost *= 2;
        updateDisplay();
    }
});


doubleCookiesBtn.addEventListener("click", () => {
    if (gold >= doubleCookiesCost) {
        gold -= doubleCookiesCost;
        cookiesPerClick *= 2;
        doubleCookiesCost *= 2;
        updateDisplay();
    }
});


updateDisplay();
