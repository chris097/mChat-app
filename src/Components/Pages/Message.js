import React from 'react';
// import photoUrl from '../images/chat-group.jpg';


const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = ''
}) => {
    return(
        <div>
            { photoURL ? (
                <img src={photoURL} alt="Avatar" width={45} height={45}/>
            ): null}
            {displayName ? <p>{displayName}</p> : null}
            <p>{text}</p>
        </div>
    )
}

export default Message