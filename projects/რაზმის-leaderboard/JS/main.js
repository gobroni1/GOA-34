// Import Firebase functions
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

// Handle button click to check authentication state
document.getElementById("join-btn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default action

    // Check if the user is logged in
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is authenticated; redirect to leaderboard.html
            window.location.href = "../html/leaderboard.html";
        } else {
            // User is not authenticated; redirect to registration page
            window.location.href = "../html/singup.html"; // Adjust path as needed
        }
    });
});
