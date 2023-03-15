// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1IirUSLnncOa_dD5IY9hvvvVN8VhC-gU',
  authDomain: 'chatgpt-kira.firebaseapp.com',
  projectId: 'chatgpt-kira',
  storageBucket: 'chatgpt-kira.appspot.com',
  messagingSenderId: '802551874946',
  appId: '1:802551874946:web:8b71d1a6f59d58ced2fb9b',
  measurementId: 'G-KWTQDGVEQ1',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
