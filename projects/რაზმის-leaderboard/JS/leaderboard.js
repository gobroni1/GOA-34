// Import necessary Firebase Firestore functions
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

// Firebase configuration (ensure it's the same as your previous one)
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
const db = getFirestore(app);

function displayLeaderboard() {
    const leaderboardElement = document.getElementById('leaderboard');
    const usersRef = collection(db, "users");
    const orderedUsersQuery = query(usersRef, orderBy("xp", "desc"));  
    
    getDocs(orderedUsersQuery)
        .then((querySnapshot) => {
            leaderboardElement.innerHTML = ""; 
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                const userEntry = document.createElement('div');
                userEntry.classList.add('leaderboard-entry');  
                
                userEntry.innerHTML = `
                    <div class="username"><a href="../html/editpage.html">${userData.firstName}</a></div>
                    <div><a href="${userData.github}" target="_blank" class="github-link">GitHub</a></div>
                    <div class="xp">XP: ${userData.xp} / ${userData.pxp}</div>
                `;
                
                leaderboardElement.appendChild(userEntry); 
            });
        })
        .catch((error) => {
            console.error("Error fetching leaderboard data: ", error);
        });
}

window.onload = displayLeaderboard;