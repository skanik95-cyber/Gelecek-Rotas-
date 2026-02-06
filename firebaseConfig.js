<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD-RKrwpZ3jTsZaoRtHjg1SYlZLbI-Hfuw",
    authDomain: "gelecek-rotasi-web.firebaseapp.com",
    projectId: "gelecek-rotasi-web",
    storageBucket: "gelecek-rotasi-web.firebasestorage.app",
    messagingSenderId: "1035439856136",
    appId: "1:1035439856136:web:6de6c461d03304daea0fbd",
    measurementId: "G-2WQNX3X9Z8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
