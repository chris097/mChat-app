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
        <div className="flex px-5 pt-4">
            <div>
                { photoURL ? (
                    <img className="rounded-full w-10 h-10 mt-2" src={photoURL} alt="Avatar"/>
                ): null}
                {createdAt?.seconds ? (
                    <span className="text-xs">
                        {formatRelative(new Date(createdAt.seconds * 1000), new Date()
                        )}
                    </span>
                ) : null}
            </div>
            <div className="ml-2">
                {displayName ? <p className="text-red-900 text-lg">{displayName}</p> : null}
                <p className="dark:text-white text-sm text-gray-500">{text}</p>
            </div>
        </div>
        </>
    )
}

export default Message