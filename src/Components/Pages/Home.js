import React from "react";
import googleIcon from "../images/google.svg";

const Home = ({ signInWithGoogle }) => {
    return(
        <>
        <div className="bg-gray-800 h-screen text-gray-300">

            <div className="px-10 flex justify-between pt-3 border-b-gray-400 border-b">
                <div>
                    <svg className="w-12 text-center m-auto inline text-red-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">MyChat</span>
                </div>
                <div className="text-white w-8 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
              </div>
            </div>

            <div className="google-card">
                <div><span><svg className="w-12 text-center m-auto inline text-red-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></span><span className="text-2xl ml-3">React Awesome Chat</span></div>
                <p className="text-lg">The easiest way to chat with people around the world</p>
                <button className="bg-white text-gray-800 p-2 mt-4 hover:bg-gray-400 hover:text-white rounded" onClick={signInWithGoogle}>
                    <span><img className="w-6 inline" src={googleIcon} alt="google_icon"/></span> 
                    Sign in with Google
                </button>
            </div>

        </div>
        </>
    )
}

export default Home;