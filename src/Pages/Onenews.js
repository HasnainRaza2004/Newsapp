import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Onenews = () => {
const [onenews,setonenews] = useState({});
  const location = useLocation();
  useEffect(()=>{
console.log(location.state);
setonenews(location.state)
  },[])
  return (
    <>
      <h1>One News</h1>
      <Box>
      <img src={onenews.urlToImage} width="100%" height="500px" alt="" />
        <Typography variant='h3'>{onenews.title}</Typography>
        <Typography variant='h5'>{onenews.description}</Typography>
        <Typography sx={{marginBottom:2,marginTop:2,marginLeft:2,textAlign:"cneter"}}>Author : {onenews.author}</Typography>
<Typography sx={{marginBottom:2,marginTop:2,marginLeft:2,textAlign:"cneter"}}>Published At : {onenews.publishedAt}</Typography>
      </Box>
    </>
  )
}

export default Onenews
