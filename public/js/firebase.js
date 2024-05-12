let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAa-1_MC9DUCk_IGV-hUuAHrojv8onfgv8",
    authDomain: "blogging-website-62a04.firebaseapp.com",
    projectId: "blogging-website-62a04",
    storageBucket: "blogging-website-62a04.appspot.com",
    messagingSenderId: "1029588666214",
    appId: "1:1029588666214:web:bee4414f2eff8c15126aa7"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();