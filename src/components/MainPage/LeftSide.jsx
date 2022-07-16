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
    Box,
    Typography,
    styled,
    Button
  } from "@mui/material";
  import DvrIcon from '@mui/icons-material/Dvr';

  const StartDiv = styled("div")(({ theme }) => ({
        display:"flex",
        justifyContent:"space-between",
        
  })); 


function LeftSide() {
  return (
    <Box  flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={400} height="100vh" sx={{background:"#0d1116"}}>
         <StartDiv>
            <Typography color="white" sx={{marginTop:"2rem",marginLeft:"2rem"}}>
                    Recent Repositories
                </Typography>
                <Button variant='contained' sx={{background:"#238636",width:"60px",fontSize:"12px",marginTop:"1.8rem",marginRight:"1.5rem",borderRadius:"8px"}} >
                    <DvrIcon color="white" sx={{fontSize:"18px",marginLeft:"0.8em"}} />
                    <Typography color="white" sx={{fontSize:"12px",marginLeft:"0.3em",marginRight:"1em"}}>
                        New
                    </Typography>
                </Button>
         </StartDiv>
        </Box>
    </Box>
  )
}

export default LeftSide