// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
