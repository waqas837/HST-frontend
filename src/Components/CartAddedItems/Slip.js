import React,{useState,useEffect} from 'react'
import { Box, Button, Container, Dialog, DialogActions, DialogTitle, Divider, Grid, IconButton, Typography } from '@material-ui/core'
import { CheckCircleOutline, Close, RateReview } from '@material-ui/icons'
import axios from "axios"
import {url} from "../../Api/ApiRoutes"
import _ from "lodash"

const Slip = ({openfour,setopenfour,state}) => {
    const [SlipData ,setSlipData] =useState()
    const email = localStorage.getItem("user")
    useEffect(() => {
     
    }, [])
   
    const closeSlip = async () =>{
      state.map((val)=>
       setSlipData({title:val.title,totalPrice,oneProduct:val.price,image:val.selectedFile})
    )
        // window.location.reload()
        setopenfour(false)
        // const {data} = await axios.put(`${url}/user/aftersalesemptycart/${email}`) 
        await axios.post(`${url}/user/saveSlip/${email}`,SlipData) 
      
        
    }
     var totalPrice = _.sum(state.map((val)=>(val.price*val.qty)))
    return (
        <div>
            <Dialog
        open={openfour}
        onClose={closeSlip}
        >
<DialogTitle>
<Box textAlign="center">
  <Typography variant="h5" color="Primary"><RateReview/>Purchased Slip</Typography>
</Box>
<Divider/>
{/* one row */}
<Grid container>
  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
  <IconButton onClick={closeSlip} style={{marginLeft:"300px"}}><Close/></IconButton>
<Typography variant="h5" style={{marginTop:"-40px",color:"rgb(254,170,2)",textTransform:"capitalize"}}> </Typography>
  </Grid>
</Grid>
</DialogTitle>
<Box><Typography variant="h6" color="primary" style={{marginLeft:"30px"}}>Products:</Typography></Box>
{
  state.map((val)=> val.qty>0 && <><Button style={{textAlign:"left",width:"100px"}}><CheckCircleOutline fontSize="small" color="primary"/><img src={val.selectedFile} width="50px" height="50px" alt="" />
  <Divider/></Button>
  <Box ml={2}>Price:<li>{val.price}</li></Box>
  <Box ml={2}>Dated:<li>{val.purchaseDate}</li></Box>
   
 <Divider/></>
)
}

<Divider/>
<Box ><Typography variant="body1" color="primary" style={{marginLeft:"30px"}}>Charged amount: {totalPrice} /-</Typography></Box>
 <Container>
 </Container>

<DialogActions>
                 
  <Button
  variant="contained"
  color="primary"
  size="small"
  onClick={closeSlip}
  >Save</Button>
  <Button
   size="small"
   variant="outlined"
  color="primary">Print</Button>
</DialogActions>
        </Dialog>
        </div>
    )
}

export default Slip
