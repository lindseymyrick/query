import * as firebase from "firebase";

var firebaseConfig = {
        apiKey: "AIzaSyApzrOPx9yLDbLkeqpsqtj5Z3dRukxnYqk",
        authDomain: "query-video.firebaseapp.com",
        databaseURL: "https://query-video-default-rtdb.firebaseio.com",
        projectId: "query-video",
        storageBucket: "query-video.appspot.com",
        messagingSenderId: "726399932510",
        appId: "1:726399932510:web:33d65234674173416efccf",
        measurementId: "G-RD8DBPW41Q"
      };

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
