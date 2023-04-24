'use client';

import React, { useState } from 'react'

import { Grid, Card } from '@mui/material';
import ContentRight from './content/contentRight';
import ContentLeft from './content/contentLeft';

export default function ListCardPost({ post }) {
    const [isComments, setIsComments] = useState(false);
    const contentClassname = isComments ? `check-coments` : '';
  return (
    <Grid item xs={ 12 } md={ 12 } lg={ 12 }>
        <Card sx={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between', boxShadow: 3 }}>
            <ContentRight contentClassname={ contentClassname } post={ post } setIsComments={ setIsComments } isComments={ isComments } />
            <ContentLeft contentClassname={ contentClassname } post={ post } countCommentsSplit={ 3 }/>
        </Card>
    </Grid>
  )
}
