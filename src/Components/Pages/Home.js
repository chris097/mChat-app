import React from 'react';
import mock from '../images/mock.jpg';
import chatIcon from '../images/20488998.jpg';


export const Header = () => {
    return(
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
                       <li><a className="" href="/">About</a></li>
                       <li className="ml-10" ><a href="/">How it works</a></li>
                       <li className="ml-10"><a href="/">Contact</a></li>
                       <li className="ml-10" ><a href="/">Team</a></li>
                    </ul>
                </div>

                <div className="py-3">
                    <button type="submit" className="border-2 border-red-300 rounded px-5 py-2 hover:bg-red-300 hover:text-white">Sign Up</button>
                    <button>LogIn</button>
                </div>
            </div>
        </div>
    )
}


export const Home = () => {
    return(
        <>
            <Header />
            <div className="px-10 flex z-10 p-1">
                <div className="">
                    <h1 className="text-red-400 text-6xl">Connect your friends</h1>
                    <p className="text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, 
                        quis modi saepe, temporibus maxime facere ipsum, incidunt laudantium 
                    </p>
                    <button className="border-2 border-red-300 rounded-full px-10 p-3">Get Started</button>
                </div>
                <div>
                    <img className="w-90 bg-no-repeat bg-center" src={mock} alt="Banner_image"/>
                </div>
            </div>

            <div className="px-10">
                <div><img src={chatIcon} alt="group_chat"/></div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem velit magni fugit aliquid hic eos illum! 
                    Rerum eaque dolorem a omnis molestiae dolores voluptatum eos sequi libero accusantium nisi earum, impedit 
                    inventore velit reiciendis eligendi dicta error quidem natus incidunt saepe necessitatibus distinctio, 
                    laborum architecto! Nam officia harum rerum.
                </div>
            </div>

        </>
    )
}