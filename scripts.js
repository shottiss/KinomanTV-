const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

let currentMovieId = null;

auth.onAuthStateChanged(user => {
    if (user && user.email === "YOUR_ADMIN_EMAIL") {
        document.getElementById("admin-panel").style.display = "block";
        document.getElementById("admin-controls").style.display = "block";
    } else {
        document.getElementById("admin-panel").style.display = "none";
        document.getElementById("admin-controls").style.display = "none";
    }
});

// Остальные функции (например, загрузка фильмов, комментарии, лайки) нужно добавить по необходимости
