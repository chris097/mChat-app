import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Message from './Message';
import useDarkMode from '../../hooks/useDarkMode';

const Channel = ({ 
    user = null, 
    db = null, 
    signOut 
}) => {
    const [ messages, setMessages ] = useState([]);
    const [ newMessage, setNewMessage ] = useState('');
    const [colortheme, setColorTheme] = useDarkMode();

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
        <div className="dark:bg-gray-800 h-screen dark:text-gray-300 text-gray-600 bg-gray-100 transition duration-500 fixed w-screen">

            <div className="px-10 flex justify-between pt-3 border-b-gray-400 border-b">
                    <div>
                        <svg className="w-12 text-center m-auto inline text-red-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-lg">MyChat</span>
                    </div>
                    <div className="text-white mt-2 flex">
                        <button className="text-red-500 mb-2 mr-5 hover:text-red-700 text-sm" onClick={signOut}>SIGN OUT</button>
                        <span onClick={() => setColorTheme(colortheme)}>
                            { colortheme === 'dark' ?
                            <div className="text-gray-500 w-8 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </div> :
                            <div className="text-gray-200 w-8 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            </div>}
                        </span>
                    </div>
            </div>
            <ul className="bg-scroll w-full h-4/5 overflow-auto flex flex-col-reverse pb-10">
                {messages.map(message => (
                    <li key={message.id}>
                    <Message {...message} />
                    </li>
                ))}
            </ul>
            <form onSubmit={handleOnSubmit} className="dark:bg-gray-600 absolute bottom-0 w-full p-3 border-t border-gray-200 z-40 bg-gray-100">
            <input
                className="bg-transparent w-5/6 mx-3 outline-none p-2" 
                type="text"
                value={newMessage}
                onChange={handleOnChange}
            />
            <button className="p-2 px-6" type="submit" disabled={!newMessage}>Send</button>
            </form>
        </div>
        </>
    )
}

export default Channel;