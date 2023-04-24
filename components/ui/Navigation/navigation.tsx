import  { useState } from 'react';
import NextLink from 'next/link';
import { Button, Typography, IconButton, Toolbar, Box, AppBar } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { SearchOutlined } from '@mui/icons-material';
import DrawerPage from './drawer';

const pages = [
  { menu: 'Inicio', href: '/'},
  { menu: 'Publicaciones', href: '/posts'}
];

export default function Navigation() {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <AdbIcon />
          <NextLink href="/">
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none'
                }}
            >LOGO</Typography>
          </NextLink>
          <Box flex={ 1 }/>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {pages.map((page) => (
              <NextLink key={ page.menu } href={ page.href } passHref>
                <Button
                  sx={{
                      color: 'white',
                      textDecoration: 'none'
                  }}
                >{ page.menu }</Button>
              </NextLink>
            ))}
          </Box>
          <Box flex={ 1 }/>
          <IconButton>
            <SearchOutlined
              sx={{
                  color: 'white',
              }}
            ></SearchOutlined>
          </IconButton>
          <Button
            sx={{
                color: 'white',
            }}
            onClick={ () => setIsMenuOpen(true) }
          >Menu</Button>
        </Toolbar>
      </AppBar>
      <DrawerPage isMenuOpen={ isMenuOpen } setIsMenuOpen={ setIsMenuOpen }/>
    </>
  );
}