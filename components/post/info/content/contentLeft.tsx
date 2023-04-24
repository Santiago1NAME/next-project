import React from 'react';
import Box from '@mui/material/Box';
import { CardContent, Typography, Divider, styled } from '@mui/material';
import Button from '../../../ui/Shared/button';

export default function ContentLeft({ contentClassname, post, countCommentsSplit }) {
  return (
    <Box className={ contentClassname } sx={{ display: 'none' }}>
        <CardContent sx={{ width: '100%' }}>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="div" sx={{ fontWeight: 'bold' }}>
                Comentarios
            </Typography>
            { post.comments?.slice(0, countCommentsSplit).map((comment) => (
                <Box key={ comment.id }>
                    <Divider sx={{ mt: '5px', mb: '5px' }}/>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontWeight: 'bold' }}>
                        { comment.name }
                    </Typography>
                    <Typography variant="caption" component="div">
                        { comment.body }
                    </Typography>
                </Box>
            )) }
            <Button url={ 'posts/' + post.id } countComments={ post.countComments }/>
        </CardContent>
    </Box>
  )
}
