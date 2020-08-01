import React, {useEffect, useState} from 'react'
import Box from "@material-ui/core/Box";
import {useSelector} from "react-redux";
import Message from "./Message";


const MessagesList = ({messages}) => {

    return (
        <div>
            <h1>Messages</h1>
            <Box border={1}>
                {messages.map(m => {
                    return (
                        <Message key={`${m.id}-${m.message}-${m.author}`} {...m}/>
                    )
                })}
            </Box>
        </div>
    )
};

export default MessagesList;