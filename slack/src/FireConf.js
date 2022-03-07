import firebase from 'firebase';


const firebaseConfig = {
  //Entire config file
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db ;
export {auth , provider} ;
