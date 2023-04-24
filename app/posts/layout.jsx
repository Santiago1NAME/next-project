'use client';

import React from 'react';
import { Box, Grid, AppBar } from '@mui/material';
import Menu from '../../components/ui/Menu/menu';
import style from './posts.module.css';
import BreadcrumbsC from '../../components/ui/Navigation/breadcrumbsc';

export default function PostsLayout({ children }) {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 0, marginBottom: '30px' }} >
        <Grid item xs={ 12 } md={ 3 } lg={ 2 } sx={{ display: { xs: 'none', md: 'block' } }} >
          <Grid sx={{ position: { xs: 'none', md: 'fixed' }, width: '180px' }}>
            <Menu />
          </Grid>
        </Grid>
        <Grid item xs={ 12 } md={ 9 } lg={ 10 } >
          <Box sx={{ display: 'flex', flexDirection: 'column' }} >
          <AppBar className={ style.navPost } sx={{ top: { xs: '56px', md: '64px' } }}>
              <BreadcrumbsC style={ style }/>
          </AppBar>
            <Box>
              { children }
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}