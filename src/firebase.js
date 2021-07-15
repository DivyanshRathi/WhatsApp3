import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqNLfMOfC067eyRaVxlIRPwwhoV6JllQY",
  authDomain: "whatsapp-clone-bac25.firebaseapp.com",
  projectId: "whatsapp-clone-bac25",
  storageBucket: "whatsapp-clone-bac25.appspot.com",
  messagingSenderId: "134277208287",
  appId: "1:134277208287:web:ee1ef28511720472b9f16a",
  measurementId: "G-67BPPW2LEH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;