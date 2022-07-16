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
  import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material"; 

function RightSide() {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" height="100vh" width={300} sx={{background:"#010409",marginRight:"5rem"}}>
        <Card sx={{margin:5,background:"#0d1117",width:"100%",marginLeft:"5em",marginRight:"5rem",height:"200px"}}>
            
        </Card>
        <Card sx={{margin:5,background:"#0d1117",width:"100%",marginLeft:"5em",marginRight:"5em",height:"200px"}}>
            
        </Card>
        <Card sx={{margin:5,background:"#0d1117",width:"100%",marginLeft:"5em",marginRight:"5em",height:"200px"}}>
            
        </Card>
        </Box>
    </Box>
  )
}

export default RightSide