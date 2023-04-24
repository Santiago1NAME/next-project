import React from 'react'
import InfoCardPost from './info/infoCardsPost';

const getUser = async (id) => {
    //await new Promise(resolve => setTimeout(resolve, 3000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ id }`);
    return res.json();
}

export default function CardsPosts({ post }) {
    //const user = use(getUser( post.userId ));
  return (
    <>
    <InfoCardPost post={ post }/>
    </>
  )
}
