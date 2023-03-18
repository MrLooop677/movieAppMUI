import { createContext, useState } from "react";

export const FavContext=createContext()
export const FavContextProvider=({children})=>{
    const [favList,setFavList]=useState([])
    const [isFav,setIsFav]=useState(false)
    const checkFav=(obj)=>{
        const findFavObj=favList.find((fav)=>fav.imdbID==obj.imdbID)
        if(findFavObj){
            const deleteFav=favList.filter((item) => item.imdbID !==findFavObj.imdbID )
                
            setFavList([...deleteFav])
            console.log(favList);
            setIsFav(false) 
        }else {
            setFavList([...favList, obj])
            console.log(favList);
            setIsFav(true) 
        }
    }
    const charedValue={favList,checkFav,isFav,setIsFav}
    return(
        <FavContext.Provider value={charedValue}>
            {children}
        </FavContext.Provider>
    )
}