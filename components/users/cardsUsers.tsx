'use client';

import React, { useEffect, useState } from 'react'

import { Grid, Card, Box, CardContent, Typography, Avatar, Button, Modal } from '@mui/material';
import axios from 'axios';
import ButtonFavorite from '../ui/Shared/buttonFavorite';
import InfoUser from './infoUser';

function CardsUsers() {
    const [users, setUsers] = useState([]);

    const getUser = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(async (res) => {
            await setUsers(preArray => [...preArray, res.data]);
        });
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Grid container spacing={3}>
            { users[0]?.map(user => (
                <Grid item xs={ 6 } md={ 4 } lg={ 3 } key={ user.id }>
                    <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', boxShadow: 3 }}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', pt: '16px' }}>
                            <Avatar alt="Cindy Baker" src="/per3.jpg" sx={{ width: '50%', height:'50%' }}/>
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                { user.name }
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                { user.email }
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <InfoUser user={ user }/>
                                <ButtonFavorite />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            )) }
        </Grid>
    )
}

export default CardsUsers;