'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import CardsPosts from '../../components/post/cardsPosts';
import { Grid } from '@mui/material';

export default function Posts() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(async (res) => {
      await res.data.forEach(post => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${ post.userId }`)
        .then(user => {
          post.userName = user.data.name;
          setPosts(preArray => [...preArray, post]);
        });
      });
      await res.data.forEach(post => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${ post.id }`)
        .then(comments => {
          post.countComments = comments.data.length;
          post.comments = comments.data;
          setPosts(preArray => [...preArray, post]);
        });
      });
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Grid container spacing={2}>
      { posts.slice(0, 10).map(post => (
        <CardsPosts key={ post.id } post={ post }/>
      )) }
    </Grid>
  )
}