import { Box, CardActionArea, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { FavContext } from '../context/favContext'
import CardMovieReusable from './home/componenet/CardMovieReusable'

const FavPage = () => {
    const {favList}=useContext(FavContext)
    const favBosterItems=favList.length? favList.map((item,index) => (
        <Grid item key={index} xs={4}> 
        <CardActionArea>
        <CardMovieReusable year={item.Year} type={item.Type} title={item.Title}  Poster={item.Poster}/>
        </CardActionArea>
        </Grid>
    )  
    ):<Typography variant='h3'>Not Favirot Films Exist</Typography>
  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {favBosterItems}
      </Grid>
    </Box>
  )
}

export default FavPage
