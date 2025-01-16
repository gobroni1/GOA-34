// Import Firebase functions 
import { getFirestore, doc, updateDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlyPT60ScVXk2VDuOS8bXmYN8FMF15cK0",
    authDomain: "wito-s-leaderboard.firebaseapp.com",
    projectId: "wito-s-leaderboard",
    storageBucket: "wito-s-leaderboard.appspot.com",
    messagingSenderId: "257761540599",
    appId: "1:257761540599:web:a129f99afcbc32c729d6f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Ensure only authorized users can access this page
onAuthStateChanged(auth, (user) => {
    if (user) {
        if (user.email === "gobronitsitlauri12@gmail.com") {
            console.log("Welcome authorized user!");
            loadUserData();
        } else {
            alert("Access denied. Unauthorized user.");
            window.location.href = "../html/leaderboard.html";
        }
    } else {
        window.location.href = "../html/leaderboard.html";
    }
});

// Function to load users and create input forms for editing XP
async function loadUserData() {
    const userListDiv = document.getElementById('user-list');
    const usersSnapshot = await getDocs(collection(db, "users"));

    usersSnapshot.forEach((userDoc) => {
        const userData = userDoc.data();

        // Create an HTML element for each user
        const userDiv = document.createElement('div');
        userDiv.classList.add("user-entry");
        userDiv.innerHTML = `
            <h3">${userData.firstName} ${userData.lastName}</h3>
            <label>Homework (completed/total): </label>
            <input type="text" id="homework-${userDoc.id}" placeholder="e.g. x/y" class="input-field" />
            <br>
            <br>
            <label>Homework quality (good/bad): </label>
            <input type="text" id="quality-${userDoc.id}" placeholder="G/B" class="input-field" />
            <br>
            <button onclick="updateHomework('${userDoc.id}', ${userData.xp})">Update</button>
            <br>
            <p>Current XP: <span id="xp-${userDoc.id}">${userData.xp}</span></p>
        `;
        userListDiv.appendChild(userDiv);
    });
}

// Function to update homework and XP
window.updateHomework = async function (userId) {
    const homeworkInput = document.getElementById(`homework-${userId}`).value;
    const homeworkQuality = document.getElementById(`quality-${userId}`).value;
    const [completed, total] = homeworkInput.split('/').map(Number);
    const [good, bad] = homeworkQuality.split('/').map(Number);

    if (isNaN(completed) || isNaN(total) || completed > total || good + bad !== completed) {
        alert("Please enter valid numbers for homework.");
        return;
    }

    let xpUpdate = 0;
    if (completed === total) {
        xpUpdate += (completed * 5) + 20;
    }
    if (completed / total < 0.5) {
        xpUpdate += (completed * 5) - ((total - completed) * 2);
    }
    if (good > bad) {
        xpUpdate += good * 2;
    }
    if (good <= bad) {
        xpUpdate -= bad * 2;
    }
    if (completed / total > 0.5) {
        xpUpdate += 5 * completed;
    }
    

    const userRef = doc(db, "users", userId);
    const newXP = xpUpdate;
    const newpxp = (((total * 5) + 20)+(total*2));
    await updateDoc(userRef, {
        xp: newXP,
        pxp: newpxp
    });


    document.getElementById(`xp-${userId}`).innerText = newXP;
    alert(`${userData.firstName} ${userData.lastName}'XP updated to ${xpUpdate} points`);
}
