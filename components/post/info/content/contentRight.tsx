import React from 'react';
import Box from '@mui/material/Box';
import { CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';

export default function ContentRight({ contentClassname, post, setIsComments, isComments}) {
    return (
    <Box className={ contentClassname } sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <CardContent>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontWeight: 'bold' }}>
            { post.userName }
            </Typography>
            <Typography component="div" variant="subtitle1">
            { post.title }
            </Typography>
        </CardContent>
        <CardMedia
        component="img"
            sx={{ width: '100%', p: '15px', }}
            image="/contemplative-reptile.jpg"
            alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', alignItems: 'center', p: '15px', justifyContent: 'flex-end' }}>
            <IconButton aria-label="previous" sx={{ borderRadius: '5px' }}>
                <FavoriteBorderIcon />
                <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontWeight: 'bold' }}>
                    10000
                </Typography>
            </IconButton>
            { contentClassname == 'check-coments-post' ?
                ''
                :
                <IconButton aria-label="play/pause" onClick={() => setIsComments(!isComments)} sx={{ borderRadius: '5px' }}>
                    <CommentIcon />
                </IconButton>
            }
        </Box>
    </Box>
  )
}
