// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

  signInWithEmailAndPassword(auth, email, password)
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
