import React from 'react';
import Box from '@mui/material/Box';
import { CardContent, Typography, Divider, styled, Avatar, Stack } from '@mui/material';
import Button from '../../../components/ui/Shared/button';
import { Padding } from '@mui/icons-material';

export default function ContentLeftPer({ contentClassname, post, countCommentsSplit }) {
    return (
    <Box className={ contentClassname } sx={{ display: 'none' }}>
        <CardContent sx={{ width: '100%' }}>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="div" sx={{ fontWeight: 'bold' }}>
                Comentarios
            </Typography>
            { post.comments?.slice(0, countCommentsSplit).map((comment) => (
                <Box key={ comment.id }>
                    <Divider sx={{ mt: '30px', mb: '30px' }}/>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: '20px' }}>
                        <Avatar alt="Cindy Baker" src="/per3.jpg" />
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontWeight: 'bold' }}>
                            { comment.email }
                        </Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontWeight: 'bold' }}>
                        { comment.name }
                    </Typography>
                    <Typography variant="caption" component="div">
                        { comment.body }
                    </Typography>
                </Box>
            )) }
        </CardContent>
    </Box>
  )
}
