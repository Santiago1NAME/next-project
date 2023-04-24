'use client';

import React from 'react'

import { Box, Typography, Button, Modal, Divider, Avatar, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

export default function InfoUser({ user }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="text" size="small" onClick={handleOpen}>Información</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                sx={{ background: '#ffffff03', backdropFilter: 'blur(3px)' }}
            >
                <Box className="content-modal" sx={{ border: '5px solid #6DBAF2' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar className="avatar-info" alt="Cindy Baker" src="/per3.jpg"/>
                    </Box>
                    <Divider sx={{ background: "#fff", marginTop: '100px' }}/>
                    <Box sx={{ padding: '10px' }}>
                        <PersonIcon />
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2" align="center">
                            { user.username }
                        </Typography>
                        <Typography id="keep-mounted-modal-title" variant="subtitle1" component="h2" align="center">
                            ({ user.name })
                        </Typography>
                        <Typography id="keep-mounted-modal-title" variant="subtitle1" component="h2">
                            Correo: { user.email }
                        </Typography>
                        <Typography id="keep-mounted-modal-title" variant="subtitle1" component="h2">
                            Localización: { user.address.city } - ({ user.address.street })
                        </Typography>
                    </Box>
                    <Divider sx={{ background: "#fff" }}/>
                    <Box sx={{ height: '100px', padding: '10px', marginBottom: '30px' }}>
                        <BusinessIcon  />
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2" align="center">
                            Compañia
                        </Typography>
                        <Typography id="keep-mounted-modal-title" variant="subtitle1" component="h2">
                            Empresa: { user.company.name }
                        </Typography>
                        <Typography id="keep-mounted-modal-title" variant="subtitle2" component="h2">
                            { user.company.catchPhrase }
                        </Typography>
                    </Box>
                    <Box sx={{ bgcolor: '#6DBAF2', height: '101px', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <IconButton className="icons-contact">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton className="icons-contact">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton className="icons-contact">
                            <TwitterIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
