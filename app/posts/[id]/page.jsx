'use client';

import React, { useEffect, useState } from 'react'
import axios from "axios";

import { Grid, Card } from '@mui/material';
import { usePathname } from 'next/navigation';
import ContentRight from '../../../components/post/info/content/contentRight';
import ContentLeftPer from './contentLeftPer';

export default function Post() {
  const [isComments, setIsComments] = useState(false);
  const [post, setPost] = useState([]);
  const pathname = usePathname();

  const getPost = async (idUser) => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${ idUser }`)
    .then(async (res) => {
      var post = res.data;
      await axios.get(`https://jsonplaceholder.typicode.com/users/${ post.userId }`)
      .then(user => {
        post.userName = user.data.name;
        setPost(preArray => [...preArray, post]);
      });
      await  axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${ post.id }`)
        .then(comments => {
          post.countComments = comments.data.length;
          post.comments = comments.data;
          setPost(preArray1 => [...preArray1, post]);
      });
    });
  }

  useEffect(() => {
    const splitP = pathname.split('/');
    getPost(splitP[2]);
  }, [pathname]);

  return (
    <Grid item xs={ 12 } md={ 12 } lg={ 12 }>
        <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', marginBottom: '30px', boxShadow: 3 }}>
            <ContentRight contentClassname={ 'check-coments-post' } post={ post[0] ? post[0] : '' } setIsComments={ setIsComments } isComments={ isComments } />
            <ContentLeftPer contentClassname={ 'check-coments-post' } post={ post[0] ? post[0] : '' } countCommentsSplit={ post[0] ? post[0].countComments : 3 }/>
        </Card>
    </Grid>
  )
}
