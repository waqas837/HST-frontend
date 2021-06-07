import React from "react";
import { Button, Grid, Typography, CssBaseline,makeStyles,Container } from "@material-ui/core";
import img from "../../images/thump.png";
const useStyles = makeStyles(theme=>({
  respMarginButton:{
    [theme.breakpoints.down("sm")]:{
      marginBottom:"10px"
    }
  }
}))
const About = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Grid container style={{ marginTop: "35px"}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{ textAlign:"center"}}
        >
          <Typography variant="h4" color="initial"
          style={{fontWeight:"bolder"}}
          >
            About Us
          </Typography>
          <Container maxWidth="xs">
          <Typography variant="subtitle1" color="initial" style={{marginBottom:"3px",textAlign:"justify"}}>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Neque porro quisquam
            epteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt 
            
          </Typography>
         
          <Button
            size="small"
            className={classes.respMarginButton}
            style={{
              backgroundColor: "rgb(254,181,2)",
              borderRadius: "0px",
              color: "black",
              marginTop:"10px",
            }}
          >
            Learn More
          </Button>
          </Container>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{marginBottom:"20px", textAlign:"center" }}
        >
          <img src={img} width="300px" height="auto" alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
