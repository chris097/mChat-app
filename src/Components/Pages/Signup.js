import React from "react";
import { Link } from "react-router-dom";

export const UserSignUp = () => {
    return(
        <>
        <div className="shadow-2xl absolute left-1/3 w-auto mt-20 px-5 h-auto py-5">
            <div className="text-2xl italic text-black-100 text-center">
                <span><svg className="w-14 inline text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg></span> 
                mChat
            </div>
            <p className="pt-8">Login to mchat world</p>
            <div className="w-96 my-5">
                <button type="submit" className="w-full text-center bg-green-400 p-1 text-white rounded"><span><svg className="w-8 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
            </svg></span> Google</button>
            </div>
            <h1 className="text-center">OR</h1>
            <div className="w-96 border-gray-200 border-solid border-2 rounded-md p-2 mt-3"><input className="w-full outline-none" type="text" placeholder="Full Name"/></div>
            <div className="w-96 border-gray-200 border-solid border-2 rounded-md p-2 mt-3"><input className="w-full outline-none" type="text" placeholder="Email"/></div>
            <div className="w-96 border-gray-200 border-solid border-2 rounded-md p-2 mt-3"><input className="w-full outline-none" type="password" name="password" id="password" placeholder="Password"/></div>
            <div className="w-96 bg-red-400 p-2 mt-3 rounded-md text-center text-white outline-none"><button className="w-full outline-none" type="submit">Sign Up</button></div>
            <div className="pt-2">Already registered <Link to="/src/Components/Pages/Login"><span className="text-red-300 cursor-pointer">click here</span></Link> </div>
        </div>
        </>
    )
}