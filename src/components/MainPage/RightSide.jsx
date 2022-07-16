import React from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
    Avatar,
    useMediaQuery,
    Box
  } from "@mui/material";

function RightSide() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        RightSide
    </Box>
  )
}

export default RightSide