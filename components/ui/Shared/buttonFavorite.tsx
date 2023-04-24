import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';

export default function ButtonFavorite() {
    const [liked, setLiked] = useState(false);

    return (
        <IconButton aria-label="fingerprint" onClick={ () => setLiked(!liked) } sx={{ p: '0px', borderRadius: '5px' }}>
            {liked ? <StarIcon sx={{ color: '#4caf50', fontSize: '35px' }}/> : <StarOutlineIcon sx={{ color: '#676767', fontSize: '35px' }}/>}
        </IconButton>
    )
}
