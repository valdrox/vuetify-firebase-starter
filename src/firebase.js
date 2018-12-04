import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp(process.env.FIREBASE_CONFIG);

const firestore = firebaseApp.firestore();

firestore.settings({ timestampsInSnapshots: true });

export { firestore, firebaseApp };
