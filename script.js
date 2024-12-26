// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBJTN1zba06hp38DYzeHpKOtLBGKjgILk",
  authDomain: "login-sign-up-dab35.firebaseapp.com",
  projectId: "login-sign-up-dab35",
  storageBucket: "login-sign-up-dab35.firebasestorage.app",
  messagingSenderId: "343955767264",
  appId: "1:343955767264:web:c1046fcc2c6205d94ff585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Event listener for the Sign-Up button
const submit = document.getElementById('signupBtn');
submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      alert("Account created successfully for: " + user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});

// Event listener for the Sign-In button
const signinButton = document.getElementById('signinBtn');
signinButton.addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert("Welcome back, " + user.);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});

// Toggle Sign-Up and Sign-In views
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function() {
  nameField.style.maxHeight = 0;
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function() {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};

window.onload = function() {
    nameField.style.maxHeight = 0; // Make sure name field is hidden
    title.innerHTML = "Sign In"; // Set title to Sign In
    signupBtn.classList.add("disable"); // Disable Sign Up button by default
    signinBtn.classList.remove("disable"); // Enable Sign In button by default
  };
