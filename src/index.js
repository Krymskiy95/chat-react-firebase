import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyDSR3Q_mglJrMzakV5UMWhdMPbkJUE1Q8s",
        authDomain: "chat-react-55384.firebaseapp.com",
        projectId: "chat-react-55384",
        storageBucket: "chat-react-55384.appspot.com",
        messagingSenderId: "213668584458",
        appId: "1:213668584458:web:29d5347238022d858e13f3",
        measurementId: "G-MLSQNG5K12"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
            firebase,
            auth,
            firestore
    }}>
            <App />
    </Context.Provider>,
  document.getElementById('root')
);
