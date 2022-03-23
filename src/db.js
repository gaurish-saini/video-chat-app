import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

let firebaseConfig = {
  apiKey: 'AIzaSyAbtewfGUbxDu26Fo9SL947dGCWUxMfJgQ',
  authDomain: 'video-chat-app-f0d60.firebaseapp.com',
  projectId: 'video-chat-app-f0d60',
  storageBucket: 'video-chat-app-f0d60.appspot.com',
  messagingSenderId: '1074180955649',
  appId: '1:1074180955649:web:2b44faae314be114c6aa00'
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
