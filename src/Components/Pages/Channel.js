import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Message from './Message';

const Channel = ({ user = null, db = null, signOut }) => {
    const [ messages, setMessages ] = useState([]);
    const [ newMessage, setNewMessage ] = useState('')

    let  {uid,  displayName, photoURL}  = user;

    useEffect(() => {
        if(db) {
            const unsubscribe = db
            .collection('messages')
            .orderBy('createdAt')
            .limit(100)
            .onSnapshot(querySnapshot => {
                // Get all document from collection - with IDs
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                // Update state
                setMessages(data)
            })
            //Detect Listener
            return unsubscribe;
        }
    }, [db])

    const handleOnChange = e => {
        setNewMessage(e.target.value)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        e.stopPropagation()

        if(db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
        }
    }


    return (
        <>
        <div className="bg-gray-800 h-screen text-gray-300">

            <div className="px-10 flex justify-between pt-3 border-b-gray-400 border-b">
                    <div>
                        <svg className="w-12 text-center m-auto inline text-red-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-lg">MyChat</span>
                    </div>
                    <div className="text-white mt-2 flex">
                        <button className="text-red-500 mb-4 mr-5 hover:text-red-700 text-sm" onClick={signOut}>SIGN OUT</button>
                        <div className="w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </div>
                    </div>
            </div>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                    <Message {...message} />
                    </li>
                ))}
            </ul>
            <form onSubmit={handleOnSubmit}>
            <input
            className="border border-gray-500" 
                type="text"
                value={newMessage}
                onChange={handleOnChange}
            />
            <button type="submit" disabled={!newMessage}>Send</button>
            </form>
        </div>
        </>
    )
}

export default Channel;