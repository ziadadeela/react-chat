import React from 'react'
import Box from "@material-ui/core/Box";


const Sidebar = ({users}) => {
    return (
        <div>
            <h1>Users</h1>
            <Box border={1}>
                {users.map(user => (
                    <li key={`${user.id}-${user.name}`}>{user.name}</li>
                ))}
            </Box>
        </div>
    )
};

export default Sidebar;