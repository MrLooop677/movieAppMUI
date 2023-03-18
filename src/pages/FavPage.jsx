import { Box, CardActionArea, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { FavContext } from '../context/favContext'
import CardMovieReusable from './home/componenet/CardMovieReusable'

const FavPage = () => {
    const {favList}=useContext(FavContext)
    console.log(favList[0].Poster);
    const favBosterItems=favList.map((item,index) => (
        <Grid item key={index} xs={4}> 
        <CardActionArea>
        <CardMovieReusable year={item.Year} type={item.Type} title={item.Title}  Poster={item.Poster}/>
        </CardActionArea>
        </Grid>

    )
        
    )
  return (
    <Box>
      <Grid container spacing={2}>
        {favBosterItems}
      </Grid>
    </Box>
  )
}

export default FavPage
