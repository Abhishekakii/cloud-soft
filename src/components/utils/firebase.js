// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC_BQjf3jFLeHjdECxCi22y3bxo4aBjnSg",
	authDomain: "test-project-4d899.firebaseapp.com",
	projectId: "test-project-4d899",
	storageBucket: "test-project-4d899.appspot.com",
	messagingSenderId: "171706981193",
	appId: "1:171706981193:web:4d02d791b9f1cc90145898",
	measurementId: "G-4QFQ9JVC19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fire_db = getDatabase(app);

export default fire_db;
