import React from 'react';
import UserCard from './UserCard';
import './Results.css';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';

function Results({userFriends}) {



    return (
        <>
        <Grid container className="results">
            {userFriends.map((friend) => (
                <UserCard
                friend={friend}
                key={friend.user.username} />
            ))}
        </Grid>
        </>
    )
}

export default Results;