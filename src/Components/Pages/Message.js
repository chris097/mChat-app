import React from 'react';
import { formatRelative } from "date-fns"


const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = ''
}) => {
    return(
        <>
        <div className="ml-5 flex mt-4">
            <div>
            { photoURL ? (
                <img className="rounded-full w-10 h-10 mt-2" src={photoURL} alt="Avatar"/>
            ): null}
            </div>
            <div className="ml-2">
                <div className="flex">
                {displayName ? <p className="text-red-900 text-lg ml-0">{displayName}</p> : null}
                {createdAt?.seconds ? (
                    <span className="text-xs mt-2 ml-3">
                        {formatRelative(new Date(createdAt.seconds * 1000), new Date()
                        )}
                    </span>
                ) : null}
                
                </div>
                <p className="dark:text-white text-sm text-gray-500">{text}</p>
            </div>
        </div>
        </>
    )
}

export default Message