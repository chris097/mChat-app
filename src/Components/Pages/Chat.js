import React, { useState, useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import userPix from "../images/chat-group.jpg";


export const UserChatPage = ({ user = null, db = null }) => {

    const [ messages, setMessages ] = useState([])
    const [ newMessage, setNewMessage ] = useState('')

    const [ uid, displayName, photoUrl ] = user;

    const signOut = async () => {
        try{
            await firebase.auth().signOut();
        }catch (error){
            console.log(error.message)
        }
    }

    useEffect(() => {
        if(db) {
            const unsubscribe = db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(querySnapshot => {
                // Get all document from collection - with IDs
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                //Update state
                setMessages(data)
            })

            return unsubscribe;
        }

    }, [db])

    
    const handleOnChange = e => {
        setNewMessage(e.target.value);
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if(db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoUrl
            })

        }
    }

    return(
        <>
            <div className="flex h-full">
                <div className=" bg-red-400 fixed h-full w-1/4">
                   <div className="flex bg-red-300 p-2 m-2">
                        <span><svg className="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg></span>
                      <input className="bg-transparent placeholder-white ml-1 w-full" type="search" name="" id="" placeholder="Search"/>
                   </div>

                   <div className="flex px-2 pt-3 border-b-2 border-red-300 pb-2">
                        <img className="w-10 h-10 rounded-full" src={userPix} alt="User_image"/>
                        <div className="text-sm ml-2">
                            <p className="font-bold">Christian Chiemela</p>
                            <p>Hello Boss!</p>
                        </div>  
                        <div className="text-xs ml-20">
                            Apr 18
                        </div>                    
                   </div>

                   <button onClick={signOut} className="fixed bottom-1 ml-2 text-gray-500 hover:text-gray-800">
                        <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                   </button>
                </div>

                <div className="w-full ml-80 relative h-96">
                    <div className="bg-gray-100 px-3 py-2 flex justify-between">
                        <div>mChat</div>
                        <div>
                            <svg className="w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                        </div>

                    <div className="flex h-full flex-col-reverse px-5 text-sm">
                        <div className="p-2 self-end">
                            <div className="py-3">
                                <div className="bg-red-200 rounded-tr-3xl rounded-l-md p-2 text-gray-500">Okey then!</div>
                                <div className="text-right text-xs text-gray-400">Apr 20</div>
                            </div>
                        </div>
                        { messages.map(msg => ( 
                            <li key={msg.id}>{msg.text}</li>
                       ))}
                        <div className="p-2 self-start absolute w-w flex">
                            <img className="w-10 h-10 rounded-full" src={userPix} alt=""/>
                            <div className="py-4">
                                <div className="bg-gray-100 rounded-tl-3xl rounded-r-md p-2 w-2/4">
                                   {messages}
                                </div>
                                <div className="text-xs text-left text-gray-400">Apr 21</div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed bottom-0 w-full bg-gray-100 p-2">
                        <span><svg className="w-6 text-gray-400 inline mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg></span>
                        <form onSubmit={handleOnSubmit}>
                            <input className="border border-gray-400 w-2/3 p-2 rounded" type="text" name="" id="" placeholder="Type a message"/>
                            <button value={newMessage} onChange={handleOnChange} className="bg-red-400 ml-1 p-2 rounded text-white" type="submit" disabled={!newMessage}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}