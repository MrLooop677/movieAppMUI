import { createTheme } from "@mui/material";

export const lightTheme=createTheme({
    palette:{
        mode:"light",
        background:{
            header:"#181330",
            body:"#fff"
        }
    }
    
})
export const darkTheme=createTheme({
    palette:{
        mode:"dark",
        background:{
            header:"#181330",
            body:"#000"
        }
    }
    
})