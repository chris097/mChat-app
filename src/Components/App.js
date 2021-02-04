/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Channel from './Pages/Channel'


firebase.initializeApp({
    apiKey: "AIzaSyDuA0Ud7zDkbRf08EEq7RTNz3lfZrzKkHI",
    authDomain: "chat-app-dc8e3.firebaseapp.com",
    projectId: "chat-app-dc8e3",
    storageBucket: "chat-app-dc8e3.appspot.com",
    messagingSenderId: "470903368010",
    appId: "1:470903368010:web:a70ce77cf9bc8a8febf9b3",
    measurementId: "G-00K2MWH47Z"
})

const auth = firebase.auth();
const db = firebase.firestore()



export const App = () => {

    const [ user, setUser ] = useState(() => auth.currentUser);
    const [ initializing, setInitializing ] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                setUser(user)
            }else{
                setUser(null)
            }
            if(initializing){
                setInitializing(false)
            }
        });

        // Cleanup subscription
        return unsubscribe;
    }, [initializing])

    const signInWithGoogle = async() =>{
        // Retrieve Google provider object
        const provider = new firebase.auth.GoogleAuthProvider()
        // Set language to the default browser preference
        auth.useDeviceLanguage(); 
        // Start sign in progress
        try{
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error(error)
        }
    };

    const signOut = async () => {
        try{
            await firebase.auth().signOut();
        }catch (error){
            console.log(error.message)
        }
    }

    if (initializing) return 'loading ...';

    return(
        <div>
            {
                user ? 
                <>
                <button className="bg-red-300 p-2" onClick={signOut}>Sign Out</button>
                <Channel user={user} db={db} />
                </> 
                : 
                <button className="bg-red-300" onClick={signInWithGoogle}>sigin with google</button>}
        </div>
    )

}