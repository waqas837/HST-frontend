import React from 'react'
import {Grid, Typography,Container,Box,IconButton,makeStyles} from "@material-ui/core"
import {Facebook,Instagram,PhoneOutlined,} from "@material-ui/icons"
import img from "../../images/logo.png";
import { Icon } from '@iconify/react';
import twitterIcon from '@iconify-icons/mdi/twitter';
const useStyles = makeStyles((theme) => ({
    lastListResponsive:{
        [theme.breakpoints.down("sm")]:{
            marginLeft:"-20px",
            marginTop:"15px"
        }
    }
  }));
const Footer = () => {
      const classes = useStyles();
    return (
        <div style ={{marginTop:"50px",marginBottom:"50px"}}>
          <Container maxWidth="md">
          <Grid container>
           {/* item 1 */}
               <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
        <img src={img}  width="100px"
            height="60px" alt=""/>
            <br/>
            <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <br/>
           <Box display={{xs:"none",sm:"none"}}>
           <Container maxWidth="xs">
            <Box style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>
            <Box><IconButton><Facebook style={{color:"rgb(254,181,2)"}}/></IconButton></Box>
            <Box><IconButton><Icon style={{color:"rgb(254,181,2)",fontSize:"20px"}} icon={twitterIcon}/></IconButton></Box>
            <Box><IconButton><Instagram style={{color:"rgb(254,181,2)"}}/></IconButton></Box>
            <Box><IconButton><PhoneOutlined style={{color:"rgb(254,181,2)"}}/></IconButton></Box>
            </Box>
            </Container>
           </Box>

               </Grid>
               {/* item 2 for the small devices*/}
               <Grid xs={12} sm={6} md={3} lg={3} xl={3} style={{marginLeft:"-70px",marginTop:"20px"}} component={Box} display={{xs:"inline",sm:"inline",md:"none",lg:"none",xl:"none"}}>
    <Grid style={{display:"flex" ,justifyContent:"space-between"}}>
     <Box mr={4} style={{marginLeft:"60px"}}>
     <Typography variant="body1" color="initial"
    style={{fontWeight:"bold"}}>Products</Typography><br/>
    <Typography variant="body1" color="initial"
    >Products1</Typography><br/><Typography variant="body1" color="initial"
    >Products2</Typography><br/><Typography variant="body1" color="initial"
    >Products3</Typography><br/>
    <Typography variant="body1" color="initial"
    >Products4</Typography>
     </Box>
     
     <Box mr={4}>
     <Typography variant="body1" color="initial"
    style={{fontWeight:"bold"}}>Services</Typography><br/>
    <Typography variant="body1" color="initial"
    >Services1</Typography><br/><Typography variant="body1" color="initial"
    >Services2</Typography><br/><Typography variant="body1" color="initial"
    >Services3</Typography><br/><Typography variant="body1" color="initial"
    >Services4</Typography>
     </Box>
    <Box mr={4}>
    <Typography variant="body1" color="initial"
    style={{fontWeight:"bold"}}>Resources
     </Typography><br/>
     <Typography variant="body1" color="initial"
    >Resources1
     </Typography><br/>
     <Typography variant="body1" color="initial"
    >Resources2
     </Typography><br/>
     <Typography variant="body1" color="initial"
    >Resources3
     </Typography><br/>
     <Typography variant="body1" color="initial"
    >Resources4
     </Typography>
    </Box>
    
    </Grid>
    
               </Grid>
               {/* show for the large devices*/}
               <Grid xs={12} sm={6} md={3} lg={3} xl={3} style={{marginTop:"20px"}} component={Box} display={{xs:"none",sm:"none",md:"inline",lg:"inline",xl:"inline"}}>
    <Grid style={{display:"flex" ,justifyContent:"space-between"}}>
     <Box mr={4} style={{marginLeft:"60px"}}>
     <Typography variant="body1" color="initial"
    style={{fontWeight:"bold"}}>Products</Typography><br/>
    <Typography variant="body1" color="initial"
    >Products1</Typography><br/><Typography variant="body1" color="initial"
    >Products2</Typography><br/><Typography variant="body1" color="initial"
    >Products3</Typography><br/>
    <Typography variant="body1" color="initial"
    >Products4</Typography>
     </Box>
     
     <Box mr={4}>
     <Typography variant="body1" color="initial"
    style={{fontWeight:"bold"}}>Services</Typography><br/>
    <Typography variant="body1" color="initial"
    >Services1</Typography><br/><Typography variant="body1" color="initial"
    >Services2</Typography><br/><Typography variant="body1" color="initial"
    >Services3</Typography><br/><Typography variant="body1" color="initial"
    >Services4</Typography>
     </Box>
    <Box mr={4}>
    <Typography variant="body1" color="initial"
    style={{fontWeight:"bold"}}>Resources
     </Typography><br/>
     <Typography variant="body1" color="initial"
    >Resources1
     </Typography><br/>
     <Typography variant="body1" color="initial"
    >Resources2
     </Typography><br/>
     <Typography variant="body1" color="initial"
    >Resources3
     </Typography><br/>
     <Typography variant="body1" color="initial"
    >Resources4
     </Typography>
    </Box>
    
    </Grid>
    
               </Grid>
           </Grid> 
           {/* responsive icons are here */}
           <Grid container>
               <Grid xs={12} sm={12}>
               <Box display={{xs:"inilne",sm:"inline"}}>
           <Container maxWidth="xs">
            <Box style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>
            <Box><IconButton><Facebook style={{color:"rgb(254,181,2)"}}/></IconButton></Box>
            <Box><IconButton><Icon style={{color:"rgb(254,181,2)",fontSize:"20px"}} icon={twitterIcon}/></IconButton></Box>
            <Box><IconButton><Instagram style={{color:"rgb(254,181,2)"}}/></IconButton></Box>
            <Box><IconButton><PhoneOutlined style={{color:"rgb(254,181,2)"}}/></IconButton></Box>
            </Box>
            </Container>
           </Box>
               </Grid>
           </Grid>
          </Container>
        </div>
    )
}

export default Footer
