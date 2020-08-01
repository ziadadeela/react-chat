import React, {useState} from 'react'
import Box from "@material-ui/core/Box";
import {useDispatch} from "react-redux";
import {addMessage} from "../redux/message/actions";


const AddMessage = (props) => {
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    return (
        <div>
            <Box border={1}>
                <input type="text"
                       value={message}
                       onChange={(e) => setMessage(e.target.value)}
                       onKeyPress={(e) => {
                           if (e.key === 'Enter') {
                               dispatch(addMessage(message, 'Me'))
                               setMessage('');
                           }
                       }}
                />
            </Box>
        </div>
    )
};

export default AddMessage;