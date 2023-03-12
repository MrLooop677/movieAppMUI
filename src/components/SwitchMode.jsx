import { Stack, Switch, Typography } from '@mui/material'
import React from 'react'

const SwitchMode = ({isDarkMode,setDarkMode}) => {
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography color="text.primary">Light</Typography>
        <Switch checked={isDarkMode} onChange={()=>setDarkMode(!isDarkMode)}/>
        <Typography color="text.primary">Dark</Typography>
      </Stack>
    </>
  )
}

export default SwitchMode
