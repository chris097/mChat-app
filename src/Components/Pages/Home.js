/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';  
// import { LoginUser } from "./Login";
import mock from '../images/chat-group.jpg';
import chatIcon from "../images/20488998.jpg";
import { Link } from 'react-router-dom';


export const Home = () => {
    return(
        <>
        <div className="bg-white shadow h-20 py-3 z-50">
        <div className="px-10 flex z-40">
             <div className="text-2xl italic text-black-100">
                 <span><svg className="w-14 inline text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                 </svg></span> 
                  mChat
             </div>

             <div className="flex-1 ml-20">
                 <ul className="flex mt-4">
                    <li><a className="text-gray-400 hover:text-gray-700" href="/">About</a></li>
                    <li className="ml-10 text-gray-400 hover:text-gray-700" ><a href="/">How it works</a></li>
                    <li className="ml-10 text-gray-400 hover:text-gray-700"><a href="/">Contact</a></li>
                    <li className="ml-10 text-gray-400 hover:text-gray-700" ><a href="/">Team</a></li>
                 </ul>
             </div>
           
          
             
                 <div className="py-3">
                    <Link to="/src/Components/Pages/Login">
                        <button type="submit" className="bg-red-500 rounded-full px-5 py-2 hover:bg-red-600 text-white ease-in-out">Get Started</button>
                    </Link>
                 </div>
            
 

         </div>
     </div>

            <div className="px-10 flex z-10 p-1">
                <div className="w-2/6 mt-40">
                    <h1 className="text-red-400 text-6xl">Connect your friends</h1>
                    <p className="text-xl text-gray-500 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, 
                        quis modi saepe, temporibus maxime facere ipsum, incidunt laudantium 
                    </p>
                    <button className="border-2 border-red-300 rounded-full px-10 p-3 mt-5">Get Started</button>
                </div>
                <div className="w-5/6">
                    <img className="w-90 bg-no-repeat bg-center" src={chatIcon} alt="Banner_image"/>
                </div>
            </div>

            <div className="pt-10">
               <div className="text-center text-2xl pb-10">
                    How it works
               </div>
               <div className="flex justify-around">
                    <div className="shadow-2xl bg-white-600 w-72 h-auto text-center">
                        <svg className="w-14 text-red-500 mx-auto py-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                     <p className="py-1 px-4 pb-5 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eum nostrum, iusto obcaecati animi officiis rerum dolor exercitationem incidunt. Architecto!</p>
                    </div>
               </div>
            </div>
            
            <div className="flex pt-20">
                <div className="w-2/3">
                    <img src={mock} alt=""/>
                </div>
                <div className="w-1/2 pt-32 px-5">
                    <h1 className="text-3xl pb-4">Join mChat</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Iure quae consequatur dicta magni odio eveniet quo rerum blanditiis 
                        repudiandae quos dolore consectetur incidunt, provident exercitationem 
                        suscipit corrupti cum quidem commodi eligendi ab beatae ullam culpa. 
                        Placeat atque eaque, deserunt at quaerat numquam voluptas mollitia necessitatibus 
                        omnis culpa ipsa quas provident.
                    </p>
                    <button className="border-2 border-red-300 rounded-full px-10 p-3 mt-5">Join mChat</button>
                </div>
            </div>
            
            <div className="px-10 border-t-2 border-gray-300 mt-24">
                <div className="text-2xl italic text-black-100">
                    <span><svg className="w-14 inline text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span> 
                    mChat
                </div>
            </div>
        </>
    )
}