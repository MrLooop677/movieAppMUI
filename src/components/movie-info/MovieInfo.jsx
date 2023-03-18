import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import MovieDetails from "./component/MovieDetails";
import { useParams } from "react-router-dom";
import MoviePoster from "./component/MoviePoster";
import { fetchData } from "../../Hooks/UseFetchData";
import { FavContext } from "../../context/favContext";

const MovieInfo = () => {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState({});
  const {checkFav,isFav,favList,setIsFav}=useContext(FavContext)

  const getDetailFilm = async () => {
    const res = await fetchData(`i=${id}`);
    setFilmDetail(res);
  };
  useEffect(() => {
    getDetailFilm();

    const findFavObj=favList.find((fav)=>fav.imdbID==filmDetail.imdbID)
    if(findFavObj){
      
        setIsFav(true) 
    }else {
       
        setIsFav(false) 
    }
  }, [favList,filmDetail.imdbID,setIsFav]);


  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={5}>
          <MoviePoster isFav={isFav}  Poster={filmDetail.Poster} />
        </Grid>
        <Grid item md={7}>
          <MovieDetails isFav={isFav} checkFav={checkFav} filmDetail={filmDetail} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieInfo;
