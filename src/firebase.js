import firebase from "firebase";
 

const firebaseConfig = {
  apiKey: "AIzaSyDBjIk9hrIpzOa5bgT45Wn7uuJlPMEjvek",
  authDomain: "hikidashi-db39c.firebaseapp.com",
  projectId: "hikidashi-db39c",
  storageBucket: "hikidashi-db39c.appspot.com",
  messagingSenderId: "61714200942",
  appId: "1:61714200942:web:df7019a7fd3161241d697f",
  measurementId: "G-YZRFHQZ6E4",
};

firebase.initializeApp(firebaseConfig);
 
export default firebase;