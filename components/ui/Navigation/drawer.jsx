import * as React from 'react';
import { Drawer, List, ListItem, Input, InputAdornment, Box, ListItemIcon, ListItemText, IconButton, Divider  } from '@mui/material';
import { MaleOutlined, ConfirmationNumberOutlined, SearchOutlined, Cloud, Folder, Games } from '@mui/icons-material';

export default function DrawerPage({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
        <Drawer
            open={ isMenuOpen }
            anchor="right"
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={ () => setIsMenuOpen(false) }
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>
                <List>
                    <ListItem>
                        <Input
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                    <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ConfirmationNumberOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Mis Ordenes'} />
                    </ListItem>
                    <ListItem sx={{ display: { xs: '', md: 'none' } }}>
                        <ListItemIcon>
                            <MaleOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Hombres'} />
                    </ListItem>
                </List>
                <Divider sx={{ display: { xs: '', md: 'none' } }} />
                <List sx={{ display: { xs: '', md: 'none' } }}>
                    <ListItem>
                        <ListItemIcon>
                            <Folder/>
                        </ListItemIcon>
                        <ListItemText primary={'Inicio'} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Games/>
                        </ListItemIcon>
                        <ListItemText primary={'Post'} />
                    </ListItem>
                </List>
                <Divider sx={{ display: { xs: '', md: 'none' } }} />
                <List sx={{ display: { xs: '', md: 'none' } }}>
                    <ListItem>
                        <ListItemIcon>
                            <Folder/>
                        </ListItemIcon>
                        <ListItemText primary={'Opción 1'} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Games/>
                        </ListItemIcon>
                        <ListItemText primary={'Opción 2'} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Cloud/>
                        </ListItemIcon>
                        <ListItemText primary={'Opción 3'} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Cloud/>
                        </ListItemIcon>
                        <ListItemText primary={'Opción 4'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    </>
  )
}
