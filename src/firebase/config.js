import firebase from "firebase/app";
import "firebase/storage"; // to store our images
import "firebase/firestore"; // is our database
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDoBB0u-SgvkeW8U_I4BUGwRaKaUmn7nGA",
  authDomain: "collection-app-5d9e8.firebaseapp.com",
  projectId: "collection-app-5d9e8",
  storageBucket: "collection-app-5d9e8.appspot.com",
  messagingSenderId: "122231247185",
  appId: "1:122231247185:web:050e5681680518b3a54370",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timeStamp };
