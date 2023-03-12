import { Stack, Switch, Typography } from '@mui/material'
import React from 'react'

const SwitchMode = () => {
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Light</Typography>
        <Switch/>
        <Typography>Dark</Typography>
      </Stack>
    </>
  )
}

export default SwitchMode
