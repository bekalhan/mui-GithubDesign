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
    <Box flex={2} sx={{ display: { xs: "none", lg: "block" } }}>
        <Box position="fixed" height="100vh" width={278} sx={{background:"#010409",marginRight:"5rem"}}>
            <Card sx={{width:"80%",marginLeft:"27.8px",marginTop:"2em",height:"200px",background:"#0d1117"}}>
            </Card>
            <Card sx={{width:"80%",marginLeft:"27.8px",marginTop:"2em",height:"200px",background:"#0d1117"}}>
            </Card>
            <Card sx={{width:"80%",marginLeft:"27.8px",marginTop:"2em",height:"200px",background:"#0d1117"}}>
            </Card>
            <Card sx={{width:"80%",marginLeft:"27.8px",marginTop:"2em",height:"200px",background:"#0d1117"}}>
            </Card>
        </Box>
    </Box>
  )
}

export default RightSide;

//#010409  46.8+120=166.8 160+62.40 = 224.4