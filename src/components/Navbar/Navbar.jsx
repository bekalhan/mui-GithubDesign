import { AppBar,Toolbar,styled ,Box, InputBase, Badge } from '@mui/material'
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
  import {
    List,
    ListItem,
    ListItemText,
    Avatar,
  } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import cedric from '../../img/ced7.jpeg';


const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "flex-start",
    background:"#181c24"
});

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const MenuIcons = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]:{
        width:"100%",
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
        gap: "20px",
    }
  }));

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "20%",
    height:"30px",
    marginLeft:"1em",
    background:"#101414",
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down("sm")]:{
        display:"none"
    }
  }));

function Navbar() {
  return (
    <AppBar position='stick'>
        <StyledToolbar>
            <MenuIcons>
                <MenuIcon sx={{display:{xs:"block",sm:"none"}}} />
                <GitHubIcon sx={{fontSize:35}} />
                <NotificationsIcon sx={{display:{xs:"block",sm:"none"}}} />
            </MenuIcons>
             <Search> 
                <InputBase sx={{color:"white",fontWeight:"200"}} placeholder='search or jump to...'></InputBase>
                <CodeOffIcon sx={{fontSize:15,textAlign:"center",justifyContent:"center",marginTop:"0.4em",border:"1px solid white",cursor:"pointer"}} />
             </Search> 
            <Box sx={{display:{xs:"none",sm:"block"}}}>
                <List sx={{display:"flex"}}>
                <ListItem sx={{display:"flex",flexDirection:"column",}}>
                    <ListItemText primary="PullRequest" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Issues" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Marketplace" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Explore" />
                </ListItem>   
            </List>
            </Box>
            <Icons sx={{marginLeft:"auto"}}>
                <Badge color="primary" badgeContent={1}>
                    <NotificationsIcon />
                </Badge>
                <AddIcon/>
                <Badge color="primary" badgeContent={3} >
                    <Avatar src={cedric} />
                </Badge>
            </Icons>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar