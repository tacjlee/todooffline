import firebase from 'firebase/app'
import "firebase/database"
const config = {
    apiKey: "AIzaSyCvqcvsWvMfZWKnVGBcTcUYE0-8LyYtyig",
    authDomain: "todo-8c6a0.firebaseapp.com",
    databaseURL: "https://todo-8c6a0.firebaseio.com",
    projectId: "todo-8c6a0",
    storageBucket: "todo-8c6a0.appspot.com",
    messagingSenderId: "283384539545",
    appId: "1:283384539545:web:b88c88afcb1f2da4f2cb08",
    measurementId: "G-7C480ZTJRV"

};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
export default firebase;