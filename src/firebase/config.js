import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA5IVXJ8gJ8T6qUXlVBErRBB5Mqe14GBY8",
    authDomain: "live-chat-vue.firebaseapp.com",
    projectId: "live-chat-vue",
    storageBucket: "live-chat-vue.appspot.com",
    messagingSenderId: "780992236287",
    appId: "1:780992236287:web:303f82d53c5222f3da1aca"
};


// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }