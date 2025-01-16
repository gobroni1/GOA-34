// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

// Your web app's Firebase configuration
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
const auth = getAuth();
const db = getFirestore();


// Function to display messages
function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    if (messageDiv) {
        messageDiv.style.display = "block";
        messageDiv.innerHTML = message;
        messageDiv.style.opacity = 1;
        setTimeout(() => {
            messageDiv.style.opacity = 0;
        }, 5000);
    }
}

// Register
const signUp = document.getElementById('submitSignUp');
if (signUp) {
    signUp.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const github = document.getElementById('github').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userData = {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    github: github,
                    xp: 0, 
                    pxp:0,
                };
                showMessage('Account Created Successfully', 'signUpMessage');
                const docRef = doc(db, "users", user.uid);
                return setDoc(docRef, userData);
            })
            .then(() => {
                window.location.href = 'login.html';
            })
            .catch((error) => {
                console.error("Error writing document", error);
                showMessage('Unable to create user', 'signUpMessage');
            });
    });
}

// Log in
const signIn = document.getElementById('submitSignIn');
if (signIn) {
    signIn.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('Password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                showMessage('Login is successful', 'signInMessage');
                const user = userCredential.user;
                localStorage.setItem('loggedInUserId', user.uid);
                window.location.href = 'leaderboard.html';

            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === 'auth/invalid-credential') {
                    showMessage('Incorrect Email or Password', 'signInMessage');
                } else {
                    showMessage('Account does not exist', 'signInMessage');
                }
            });
    });
}
