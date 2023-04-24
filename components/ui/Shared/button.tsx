import React from 'react';
import { Box, IconButton, Typography, styled, Link } from '@mui/material';
import NextLink from 'next/link';
import Badge, { BadgeProps } from '@mui/material/Badge';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 6,
      top: 6,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '4px 4px',
    },
}));

export default function Button({ url, countComments }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'Center', marginTop: '30px' }}>
        <Link href={ url } component={ NextLink }>
            <StyledBadge color="secondary" badgeContent={ countComments } max={99}>
                <IconButton className="button-comments" aria-label="Ver comentarios" size="large" sx={{ color: '#1976d2', borderRadius: '5px' }}>
                    <KeyboardDoubleArrowRightIcon />
                    <Typography variant="caption" component="div">
                        Ver Comentarios
                    </Typography>
                </IconButton>
            </StyledBadge>
        </Link>
    </Box>
  )
}
