import firebase from "firebase/app";
import "firebase/auth";
// firebase config
const config = {
  apiKey: "AIzaSyDRRXtTdXVbptNdOdX0-vUP5KoZN89rf3g",
  authDomain: "e-commerce-react-app-21873.firebaseapp.com",
  projectId: "e-commerce-react-app-21873",
  storageBucket: "e-commerce-react-app-21873.appspot.com",
  messagingSenderId: "855052464075",
  appId: "1:855052464075:web:c6270b41852cef1a6cd04e",
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
