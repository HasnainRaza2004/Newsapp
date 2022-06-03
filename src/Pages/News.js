import React, { useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import { Box, Typography } from '@mui/material';
const News = () => {
  const [articles,setArticles] = useState([]);
  const NewsApi = ()=>{
 let api = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-03&sortBy=publishedAt&apiKey=efe78bf0d6c847e28354f7935b960c13"

 axios.get(api)
 .then((success)=>{
  console.log(success);
  setArticles(success.data.articles)

})
.catch((error)=>{
  console.log(error);
});
};
  useEffect(()=>{
    NewsApi();
  },[]);

const navigate = useNavigate();

const onNewsclick = (item) =>{
console.log(item);
  navigate('/oneNews',{
  state : item,
})
 }
  return (
    <>
      <h1>News</h1>
      {articles.map((e,i)=>(
      <Box 
      onClick={()=>onNewsclick(e)}
       textAlign={"center"} 
       sx={{border:"1px solid black",marginBottom:2}}>
      <Box sx={{justifyContent:"start"}}>
      <img style={{marginTop:20}} width={1000} height={300} src={e.urlToImage} alt="" />
<Typography sx={{marginTop:5}} variant='h3'>{e.title}</Typography>
      </Box>
<Typography>{e.description}</Typography>
<Typography sx={{marginBottom:2,marginTop:2,marginLeft:2,textAlign:"start"}}>Author : {e.author}</Typography>
<Typography sx={{marginBottom:2,marginTop:2,marginLeft:2,textAlign:"start"}}>Published At : {e.publishedAt}</Typography>
</Box>        
      ))}
    </>
  )
}

export default News
