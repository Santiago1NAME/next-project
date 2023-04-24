'use client';

import * as React from 'react';
import { Box, Stack} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc( 100vh - 64px )' }}>
      <Stack sx={{ color: 'grey.500' }} direction="row">
        <CircularProgress color="success" />
      </Stack>
    </Box>
  );
}