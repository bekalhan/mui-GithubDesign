import React from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
    Box
  } from "@mui/material"; 
  import cedric from '../../img/ced7.jpeg';
  import StarBorderIcon from '@mui/icons-material/StarBorder';
  import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
  import armagan from '../../img/armagan.jpg';
  import CircleIcon from '@mui/icons-material/Circle';


function Starred() {
  return (
    <Box>
    <Box sx={{marginLeft:"2em",marginTop:"2em",display:"flex",justifyContent:"flex-start"}}>
        <Avatar src={cedric} />
        <Typography color="white" sx={{marginLeft:"1em",marginTop:"0.5em"}}>
            BeratKlhn starred ArmaganAmcalar/CodeShop-UI
        </Typography>
        <Typography color="white" sx={{marginLeft:"1em",fontWeight:"600",fontSize:"12px",marginTop:"1em",}}>
            13 gün önce
        </Typography>
    </Box>
    <Card sx={{margin:5,background:"#0d1117",width:"80%",marginLeft:"5em"}}>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Box sx={{display:"flex",justifyContent:"flex-start"}}>
                <Avatar src={armagan} />
                <Typography color="white" sx={{marginLeft:"0.5em",marginTop:"0.3em"}}>
                    ArmaganAmcalar/CodeShop-UI
                </Typography>
            </Box>
            
            <Box sx={{display:"flex",justifyContent:"flex-start",border:"1px solid white",borderRadius:"8px",height:"30px",width:"100px"}}>
                <StarBorderIcon color="secondary" sx={{marginLeft:"0.2em"}} />
                <Typography color="white">
                    Star     |
                </Typography>
                <KeyboardArrowDownIcon color="primary" />
            </Box>
        </Box>
        <Box sx={{marginTop:"1.2em",marginLeft:"0.3em",display:"flex",justifyContent:"flex-start"}}>
            <CircleIcon color="secondary" />
            <Typography color="white" sx={{marginLeft:"0.3em"}} > 
                Kotlin
            </Typography>
            <StarBorderIcon color="success" sx={{marginLeft:"1em"}} />
            <Typography color="white" sx={{marginLeft:"0.2em",fontSize:"14px",marginTop:"0.2em"}} >
                1
            </Typography>
            <Typography color="white" sx={{marginLeft:"2em"}}>
                    Updated Jun 30
            </Typography>

        </Box>

    </Card>
    </Box>

  )
}

export default Starred