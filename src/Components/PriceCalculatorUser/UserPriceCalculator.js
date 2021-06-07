import React, { useEffect, useState } from "react";
 import {  grey } from "@material-ui/core/colors";
import logo from "../../images/logo.png";
import {
  AddOutlined,
  Menu, Create, MonetizationOn, Description, SaveAlt, Timer, DoneAll,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { ClipLoader} from "react-spinners";
import axios from "axios";
import {url} from "../../Api/ApiRoutes"
import {
  IconButton,
  Box,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Container,
  Typography,
  Divider,
  Dialog,
  Button,
  Input,
  DialogContentText,
  DialogTitle,
  makeStyles,
  AppBar,
  Toolbar,
  TextField,  
  Hidden,
  CircularProgress
} from "@material-ui/core";
import { Edit  } from "@material-ui/icons";
import toast, { Toaster } from "react-hot-toast";
 import Loader from "react-spinners/ClipLoader";
const useStyles = makeStyles((theme) => ({
    root: {},
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    title: {
      marginRight: "auto",
      fontWeight: "bold",
    },
    titleTwo: {
      color: "white",
      fontStyle: "bold",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "90%",
      },
    },
    alignLeft: {
      textAlign: "left",
    },
    appBar: {
      marginBottom: "5px",
    },
  
    resposive: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    hover: {
      "&:hover": {
        background: grey[200],
      },
    },
  }));
  
const UserPriceCalculator = () => {
    const classes = useStyles();
     const [state,setstate] = useState({})
     const [data,setdata] = useState({})
    const [loading,setloading] = useState(false)
    const [loadings,setloadings] = useState(false)
    useEffect(()=>{
        getCalData()
    },[])
    var nan = isNaN(data.OneMarlaPrice*state.qtyForSmallStones*data.SmallStonesPrice)
    var nan1 = isNaN(data.OneMarlaPrice*state.qtyForCement*data.CementPrice)
    var nan2 = isNaN(data.OneMarlaPrice*state.qtyForSand*data.SandPrice)
    var nan3 = isNaN(data.OneMarlaPrice*state.qtyForSmallStones*data.SmallStonesPrice &&data.OneMarlaPrice*state.qtyForCement*data.CementPrice && data.OneMarlaPrice*state.qtyForSand*data.SandPrice)
 
    async function getCalData (){
  try {
    setloadings(true)
    const {data} = await axios.get(`${url}/user/getDataCalc`)
    setdata(data[0])
    setloadings(false)

  } catch (error) {
    console.log(error)
}
    }
    const history = useHistory();
    console.log(state);
// total amount
    const calculate = () => {
    setloading(true)     
  }

// main
    return (
        <div>
        <Toaster/>
       <Grid container style={{padding:"20px"}}> 
        {/*Price calcultor heading */}
        <Grid style={{textAlign:"center"}} item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography style={{fontWeight:"bolder",color:"rgb(254,181,2)"}} variant="h4" color="initial">Price Caculator</Typography>
        <Divider style={{backgroundColor:"rgb(254,181,2)",width:"10%",height:"2px",marginLeft:"auto",marginRight:"auto",marginTop:"10px",marginBottom:"10px"}}/>
        </Grid>
        </Grid> 
        {/* price calculator functionality */}
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
<Container maxWidth="sm">
<Paper p={3} elevation={9} component={Box}>
{/* 1 marla price field,hidden only on large screens */}
<Hidden only={['md','lg','xl']}>
<br />
<Box>
<Box><Typography variant="h6" color="primary" style={{marginRight:"10px" }}>1 Marla Price:</Typography></Box>  
{
 loadings?<p><CircularProgress/></p>:
  <Box ml={4}><TextField disabled defaultValue={data.OneMarlaPrice} placeholder="Price" style={{height:"35px",width:"200px"}}/></Box>

}
</Box>
</Hidden>
{/* 1 marla price field:hidden only for small screens */}
<Hidden only={['xs','sm']}>
<Box style={{display:"flex",marginLeft:"60px",marginBottom:"20px"}}>
<Box ><Typography variant="h6" color="primary" style={{marginRight:"10px",maxWidth:"130px"}}>1 Marla Price:</Typography></Box>  
{
 loadings?<p><CircularProgress/></p>:
  <Box ml={4}><TextField disabled defaultValue={data.OneMarlaPrice} placeholder="Price" style={{height:"35px",width:"200px"}}/></Box>

}
</Box>
</Hidden>


{/* 1 marla price small stones:hidden only for large screens */}
<Hidden only={['md','lg','xl']}>
<br />
<Box>
<Box><Typography variant="h6" color="primary" style={{marginRight:"10px"}}>1 Marla Price Small Stones:</Typography></Box>  
<Box ml="auto"><TextField onChange={(e)=>setstate({...state,qtyForSmallStones:e.target.value})} InputProps={{ inputProps: { min: 0} }} type="number" placeholder="Quantity Kg" style={{height:"35px",width:"120px",marginRight:"5px"}}/></Box> 
{loadings?<CircularProgress/>:<Box ml="auto"><TextField disabled defaultValue={data.SmallStonesPrice}   placeholder="Price" style={{height:"35px",width:"120px"}}/></Box>
}
 </Box>
<Box textAlign="center" style={{border:"1px solid black",marginBottom:"5px"}}><Typography variant="subtitle1" color="secondary">
Stones Cost:{nan?0:data.OneMarlaPrice*state.qtyForSmallStones*data.SmallStonesPrice}/-</Typography></Box>
</Hidden>
{/* 1 marla price small stones:hidden only for small screens */}
<Hidden only={['xs','sm']}>
<Box style={{display:"flex",marginLeft:"60px",marginBottom:"20px"}}>
<Box><Typography variant="subtitle1" color="primary" style={{marginRight:"10px",maxWidth:"130px" }}>1 Marla Price Small Stones:</Typography></Box>  
<Box ml="auto"><TextField onChange={(e)=>setstate({...state,qtyForSmallStones:e.target.value})} InputProps={{ inputProps: { min: 0} }} type="number" placeholder="Quantity Kg" style={{height:"35px",width:"120px",marginRight:"5px"}}/></Box> 
{loadings?<CircularProgress/>:<Box ml="auto"><TextField disabled defaultValue={data.SmallStonesPrice}   placeholder="Price" style={{height:"35px",width:"120px"}}/></Box>
}
</Box>
<Box textAlign="center" style={{border:"1px solid black",marginBottom:"5px"}}><Typography variant="subtitle1" color="secondary">Stones Cost:{nan?0:data.OneMarlaPrice*state.qtyForSmallStones*data.SmallStonesPrice}/-</Typography></Box>
</Hidden>


{/* 1 marla price for cement:hidden only for large screens  */}
<Hidden only={['md','lg','xl']}>
<br />
<Box>
<Box><Typography variant="h6" color="primary" style={{maxWidth:"130px"}} >1 Marla Price Cement:</Typography></Box>  
<Box ml="auto"><TextField onChange={(e)=>setstate({...state,qtyForCement:e.target.value})} InputProps={{ inputProps: { min: 0} }} type="number" placeholder="Quantity Kg" style={{height:"35px",width:"120px",marginRight:"5px"}}/></Box> 
{loadings?<p>l<CircularProgress/></p>:<Box ml="auto"><TextField disabled defaultValue={data.CementPrice}  placeholder="Price" style={{height:"35px",width:"120px"}}/></Box>
}
 </Box>
<Box textAlign="center" style={{border:"1px solid black",marginBottom:"5px"}}><Typography variant="subtitle1" color="secondary">
Cement Cost:{nan1?0:data.OneMarlaPrice*state.qtyForCement*data.CementPrice}/- </Typography></Box>
</Hidden>
{/* 1 marla price for cement:hidden only for small screens  */}
<Hidden only={['xs','sm']}>
<Box style={{display:"flex",marginLeft:"60px",marginBottom:"20px"}}>
<Box><Typography variant="subtitle1" color="primary" style={{maxWidth:"130px"}} >1 Marla Price Cement:</Typography></Box>  
<Box ml="auto"><TextField onChange={(e)=>setstate({...state,qtyForCement:e.target.value})} InputProps={{ inputProps: { min: 0} }} type="number" placeholder="Quantity Kg" style={{height:"35px",width:"120px",marginRight:"5px"}}/></Box> 
{loadings?<p>l<CircularProgress/></p>:<Box ml="auto"><TextField disabled defaultValue={data.CementPrice}  placeholder="Price" style={{height:"35px",width:"120px"}}/></Box>
}
</Box>
<Box textAlign="center" style={{border:"1px solid black",marginBottom:"5px"}}><Typography variant="subtitle1" color="secondary">
Cement Cost:{nan1?0:data.OneMarlaPrice*state.qtyForCement*data.CementPrice}/- </Typography></Box>

</Hidden>



{/* 1 marla price for sand:hidden only for large screens  */}
<Hidden only={['md','lg','xl']}>
<br />
<Box>
<Box><Typography variant="h6" color="primary" style={{marginRight:"10px",maxWidth:"130px"}}>1  Marla Price Sand:</Typography></Box>  
<Box ml="auto"><TextField onChange={(e)=>setstate({...state,qtyForSand:e.target.value})} InputProps={{ inputProps: { min: 0} }} type="number" placeholder="Quantity Kg" style={{height:"35px",width:"120px",marginRight:"5px"}}/></Box> 
{loadings?<p>l<CircularProgress/></p>:<Box ml="auto" ><TextField  disabled defaultValue={data.SandPrice} placeholder="Price" style={{height:"35px",width:"120px"}}/></Box>
}
</Box>
<Box style={{border:"1px solid black",marginBottom:"5px"}} textAlign="center"><Typography variant="subtitle1" color="secondary">Sand Cost:{nan2?0:data.OneMarlaPrice*state.qtyForSand*data.SandPrice}/- </Typography></Box>

</Hidden>
{/* 1 marla price for sand hidden only for small screens */}
<Hidden only={['xs','sm']}>
<Box style={{display:"flex",marginLeft:"60px",marginBottom:"20px"}}>
<Box><Typography variant="subtitle1" color="primary" style={{marginRight:"10px",maxWidth:"130px"}}>1  Marla Price Sand:</Typography></Box>  
<Box ml="auto"><TextField onChange={(e)=>setstate({...state,qtyForSand:e.target.value})} InputProps={{ inputProps: { min: 0} }} type="number" placeholder="Quantity Kg" style={{height:"35px",width:"120px",marginRight:"5px"}}/></Box> 
{loadings?<p>l<CircularProgress/></p>:<Box ml="auto" ><TextField  disabled defaultValue={data.SandPrice} placeholder="Price" style={{height:"35px",width:"120px"}}/></Box>
}
</Box>
<Box style={{border:"1px solid black",marginBottom:"5px"}} textAlign="center"><Typography variant="subtitle1" color="secondary">
Sand Cost:{nan2?0:data.OneMarlaPrice*state.qtyForSand*data.SandPrice}/- </Typography></Box>

</Hidden>
{/* save your record */}
<Box textAlign="right"
>
 <Button
onClick={calculate}
startIcon={<Timer fontSize="small"/>}
style={{backgroundColor:"rgb(254,181,2)"}}
variant="contained"
>Calculate Total</Button>

</Box>
{ !loading?null:
<Box my={2} style={{border:"1px solid black"}}> <Typography variant="subtitle1" color="secondary">
Total amount:{nan3?0:data.OneMarlaPrice*state.qtyForSand*data.SandPrice+data.OneMarlaPrice*state.qtyForCement*data.CementPrice+data.OneMarlaPrice*state.qtyForSmallStones*data.SmallStonesPrice}</Typography>
</Box>
}
</Paper>
</Container>
            </Grid>
        </Grid>
        </div>
    )
}

export default UserPriceCalculator;
