import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import googleIcon from "../images/google.svg";

export const Header = () => {
    const [colortheme, setColorTheme] = useDarkMode();
    return(
        
        <div className="lg:px-10 flex justify-between pt-3 border-b-gray-400 border-b xsm:px-4">
            <div>
                <svg className="w-12 text-center m-auto inline text-red-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-2xl">MyChat</span>
            </div>
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
    )
}

const Home = ({ signInWithGoogle }) => {
    return(
        <>
        <div className="dark:bg-gray-800 min-h-screen dark:text-gray-300 text-gray-600 bg-gray-50 transition duration-500">
        <Header />
            <blockquote className="lg:px-10 xsm:px-4 lg:text-6xl lg:w-1/2 mt-5 xsm:text-4xl xsm:w-full">Only one second to connect to your friends</blockquote>

            <div className="dark:bg-gray-700 bg-white shadow-2xl fixed max-h-screen lg:mt-10 lg:left-10 dark:shadow rounded h-56 text-center dark:text-gray-300 py-5 xsm:w-full lg:w-1/2 xsm:left-0 xsm:text-center xsm:mt-7">
                <div><span><svg className="w-12 text-center m-auto inline text-red-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></span><span className="text-2xl ml-3">React Awesome Chat</span></div>
                <p className="text-lg">The easiest way to chat with people around the world</p>
                <button className="bg-white dark:text-gray-800 shadow-2xl border border-gray-200 p-2 mt-4 hover:bg-gray-50 dark:hover:bg-gray-400 dark:hover:text-white rounded" onClick={signInWithGoogle}>
                    <span><img className="w-6 inline mr-2" src={googleIcon} alt="google_icon"/></span> 
                    Sign in with Google
                </button>
            </div>
            <div className="absolute bottom-1 right-10 text-sm xsm:text-center xsm:w-full xsm:right-0 xsm:mb-3 xsm:p-4">All Resrvered @ChristianChiemela Build & Designer 2021</div>
        </div>
        </>
    )
}

export default Home;