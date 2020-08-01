import React from 'react'
import Box from "@material-ui/core/Box";


const Message = ({ message, author }) => (
    <p>
        <i>{author}</i>: {message}
    </p>
)

export default Message;