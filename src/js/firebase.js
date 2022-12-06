// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set } from 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCdMyNr6hyJdUGTvscIGf-cwWwUDuJgJHU',
  authDomain: 'my-awesome-filmoteka.firebaseapp.com',
  projectId: 'my-awesome-filmoteka',
  storageBucket: 'my-awesome-filmoteka.appspot.com',
  messagingSenderId: '774761298251',
  appId: '1:774761298251:web:d761136a1dde215f0250ce',
  measurementId: 'G-3L76ZDF9LH',
  databaseURL:
    'https://my-awesome-filmoteka-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
// const analytics = getAnalytics(app);
// // const db =.database();
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
// console.log(database);

function writeUserData(userId, name, email, watchedIds, queryIds) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    watchedIds: watchedIds,
    queryIds: queryIds,
  });
}
//=====================================

export class FireBaseApi {
  constructor() {
    this.formData = {};
  }

  async createAccount() {
    const { email, password } = this.formData;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    // =============================================================
    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        console.log(userCredential.user);
        hasAccount = true;
        const user = userCredential.user;
        // ...
      })
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;

        console.log(err);
        if (errorCode === 400) {
          Notify.failure('Wrong password', errorMessage);
        }
      });
  }
}
