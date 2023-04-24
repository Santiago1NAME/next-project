import React from 'react'

import { Divider, Paper, MenuList, MenuItem, ListItemText, ListItemIcon, Link  } from '@mui/material';
import { Cloud, Folder, Group } from '@mui/icons-material';
import NextLink from 'next/link';

export default function Menu() {
  return (
    <Paper>
        <MenuList>
            <Link href="/posts" component={ NextLink } underline="none">
                <MenuItem>
                    <ListItemIcon>
                        <Folder fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{ color: '#757575' }}>Publicaciones</ListItemText>
                </MenuItem>
            </Link>
            <Divider />
            <Link href="/users" component={ NextLink } underline="none">
                <MenuItem>
                    <ListItemIcon>
                        <Group fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{ color: '#757575' }}>Usuarios</ListItemText>
                </MenuItem>
            </Link>
        </MenuList>
    </Paper>
  )
}
