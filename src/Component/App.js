import React from 'react';
import { Sidebar } from './Sidebar/Sidebar';
import "./Reset.css";
import { User } from './User/User';

export const App = () => {
    return(
        <>
            <Sidebar />
            <User />
        </>
    )
}
