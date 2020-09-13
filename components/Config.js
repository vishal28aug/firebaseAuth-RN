import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC2OfKqXynXBe2KbqUMYTHaphHxWuHk_hw',
  authDomain: 'fir-auth-56d01.firebaseapp.com',
  databaseURL: 'https://fir-auth-56d01.firebaseio.com',
  projectId: 'fir-auth-56d01',
  storageBucket: 'fir-auth-56d01.appspot.com',
  messagingSenderId: '721875417529',
  appId: '1:721875417529:web:75da81fef39d8003ba9e68',
  measurementId: 'G-G20739S6BT',
};

const Firebase = firebase.initializeApp(config);

export default Firebase;
