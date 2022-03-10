import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDljoPbWDJY83TS6U0Jn8adoOHlE6A9VyA",
  authDomain: "jimmys-club.firebaseapp.com",
  projectId: "jimmys-club",
  storageBucket: "jimmys-club.appspot.com",
  messagingSenderId: "1081365876658",
  appId: "1:1081365876658:web:51e0a093231e2974ad5eab",
  measurementId: "G-TVF4G4BD5B",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(firebaseApp);

const sendVisitorData = async (visitorData: any) => {
  visitorData.Timestamp = Timestamp.fromDate(new Date());
  const response = await fetch(
    "https://jimmys-club-default-rtdb.firebaseio.com/.json",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitorData),
    }
  );
  return response.json();
};

export { db, sendVisitorData };
