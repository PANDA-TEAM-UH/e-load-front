import { Avatar, Card } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';

const StationComments = () => {
    const { commentsByStation } = useSelector((state) => state.comments);
  return (
    commentsByStation.map((comment) => {
        console.log(comment.user.username)
        return (
          <Card key={comment._id}>
            <Avatar src={comment.user.image}/>
            <p>{comment.createdAt}</p>
            <p>{comment.body}</p>
          </Card>
        )
      })
  )
}

export default StationComments