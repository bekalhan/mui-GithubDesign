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
    Button,
    InputBase
  } from "@mui/material";
  import DvrIcon from '@mui/icons-material/Dvr';
  import cedric from '../../img/ced7.jpeg';


  const StartDiv = styled("div")(({ theme }) => ({
        display:"flex",
        justifyContent:"space-between",
        
  })); 

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "#08040c",
    border:"1px solid white",
    marginTop:"1em",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "70%",
    height:"30px",
    marginLeft:"1em",
    background:"#101414",
    display:"flex",
    justifyContent:"center",
    marginLeft:"2em"
  }));


function LeftSide() {
  return (
    <Box  flex={2} sx={{ display: { xs: "none", md: "block" } }}>
        <Box position="fixed" width={300} height="100vh" sx={{background:"#0d1116"}}>
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
         <Search>
             <InputBase sx={{color:"white",fontWeight:"200"}} placeholder='find a repository'></InputBase>
         </Search>
         <List sx={{marginLeft:"1em",marginTop:"1em"}}>
            <ListItem>
                <Avatar src={cedric} sx={{width:"20px",height:"20px"}} />
                <Typography color="white" sx={{marginLeft:"0.3em"}}>
                    bekalhan/Mern-Stack-Blog-Server
                </Typography>
            </ListItem>
            <ListItem>
                <Avatar src={cedric} sx={{width:"20px",height:"20px"}} />
                <Typography color="white" sx={{marginLeft:"0.3em"}}>
                    bekalhan/Material-UI-WebsiteDesign
                </Typography>
            </ListItem>
            <ListItem>
                <Avatar src={cedric} sx={{width:"20px",height:"20px"}} />
                <Typography color="white" sx={{marginLeft:"0.3em"}}>
                    bekalhan/ECommerceApp-Client
                </Typography>
            </ListItem>
            <ListItem>
                <Avatar src={cedric} sx={{width:"20px",height:"20px"}} />
                <Typography color="white" sx={{marginLeft:"0.3em"}}>
                    bekalhan/ECommerceApp
                </Typography>
            </ListItem>
            <ListItem>
                <Avatar src={cedric} sx={{width:"20px",height:"20px"}} />
                <Typography color="white" sx={{marginLeft:"0.3em"}}>
                    bekalhan/MEVN-Stack--Radice-TheDeveloperUniverse-Prototype
                </Typography>
            </ListItem>
            <ListItem>
                <Avatar src={cedric} sx={{width:"20px",height:"20px"}} />
                <Typography color="white" sx={{marginLeft:"0.3em"}}>
                    bekalhan/MongoDB-Express.js-Vue.js-Node.js-SugIss-App
                </Typography>
            </ListItem>
            {/* <ListItem>
                <Avatar src={cedric} sx={{width:"20px",height:"20px"}} />
                <Typography color="white" sx={{marginLeft:"0.3em"}}>
                    bekalhan/Mui-ResponsiveDesign
                </Typography>
            </ListItem>
            <ListItem>
                <Avatar src={cedric} sx={{width:"20px",height:"20px"}} />
                <Typography color="white" sx={{marginLeft:"0.3em"}}>
                    bekalhan/MusicApp-frontend-React
                </Typography>
            </ListItem> */}
         </List>
         <Typography color="white" sx={{marginLeft:"2em"}}>
            Show more
         </Typography>
         <Box sx={{marginTop:"1em",width:"80%",marginLeft:"30px",opacity:"3"}}>
            <hr>
            </hr>
         </Box>
         <Box>
            <Typography color="white" sx={{fontSize:"15px",marginLeft:"1em",marginRight:"1em",marginTop:"1em"}}>
                 When you take actions across GitHub, we’ll provide links to that activity here
            </Typography>
         </Box>

        </Box>
    </Box>
  )
}

export default LeftSide