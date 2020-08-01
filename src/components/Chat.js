import React from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import MessagesList from "./MessagesList";
import AddMessage from "./AddMessage";
import Sidebar from "./Sidebar";
import { shallowEqual, useSelector } from 'react-redux'

const Chat = (props) => {
    const messages =  useSelector(state => state.message.messages);
    const users =  useSelector(state => state.user.users);
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Sidebar users={users}/>
                </Grid>
                <Grid item xs>
                    <MessagesList messages={messages}/>
                    <AddMessage/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Chat;