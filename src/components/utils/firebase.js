// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBEiBvYBRlVNUbZHpUXQMI64C0dyuU76XM",
	authDomain: "bob-the-builder-1eaa5.firebaseapp.com",
	projectId: "bob-the-builder-1eaa5",
	storageBucket: "bob-the-builder-1eaa5.appspot.com",
	messagingSenderId: "337824966245",
	appId: "1:337824966245:web:3d55bec026c0081808888c",
	measurementId: "G-EVQYCE60GH"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fire_db = getDatabase(app);

export default app;
