import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

const Channel = ({ user = null, db = null}) => {
    const [ messages, setMessages ] = useState([]);
    const [ newMessage, setNewMessage ] = useState('')

    const [ uid, displayName, photoURL ] = user;

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
        <ul>
            {messages.map(message => (
                <li key={message.id}>{message.text}</li>
            ))}
        </ul>
        <form onSubmit={handleOnSubmit}>
        <input
           className="border border-gray-500" 
            type="text"
            value={newMessage}
            onChange={handleOnChange}
         />
         <button>Send</button>
        </form>
        </>
    )
}

export default Channel;