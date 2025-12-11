  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
    import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
    import {getDatabase} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCtKkfkJlTsGG-VqSAMjNg7SZSgiVeS_EM",
    authDomain: "edosya-d2c16.firebaseapp.com",
    databaseURL: "https://edosya-d2c16-default-rtdb.firebaseio.com",
    projectId: "edosya-d2c16",
    storageBucket: "edosya-d2c16.firebasestorage.app",
    messagingSenderId: "30664810814",
    appId: "1:30664810814:web:ecd8bf212b8f2d99038c6f",
    measurementId: "G-NCQZPJKDR2"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export  const auth = getAuth(app);