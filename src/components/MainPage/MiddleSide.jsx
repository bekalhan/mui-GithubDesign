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
  import cedric from '../../img/ced7.jpeg';


function MiddleSide() {
  return (
    <Box flex={2} p={{ xs: 0, md: 2 }}>
        <Box position="fixed" height="100vh" width={600} sx={{background:"#010409"}}>
        <Box sx={{display:"flex",justifyContent:"flex-start",marginLeft:"2em"}}> 
        <List sx={{display:"flex",color:"white",justifyContent:"flex-start",marginTop:"1em"}}>
                <ListItem sx={{display:"flex",flexDirection:"column"}}>
                    <ListItemText  primary="PullRequest" />
                </ListItem>
                <ListItem sx={{display:"flex",flexDirection:"column"}}> 
                    <ListItemText primary="Issues" />
                </ListItem>
            </List>
        </Box>
        <Box sx={{width:"70%",marginLeft:"3em"}}>
            <hr></hr>
        </Box>
        </Box>
    </Box>
  )
}

export default MiddleSide