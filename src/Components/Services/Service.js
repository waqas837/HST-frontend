import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import {useHistory} from "react-router-dom"
import {
  Box,
  Divider,
  Grid,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import { FavoriteBorder, SingleBed } from "@material-ui/icons";
import axios from "axios";
import {url} from "../../Api/ApiRoutes"
const Service = () => {

  const history = useHistory();
  useEffect(() => {
    getData();
  }, []);
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(false);
// redirect to services
const singleService = (id) =>{
history.push(`/singleservice/${id}`)
}
  // get all the data
  const getData = async () => {
    setloading(true);
    const { data } = await axios.get(`${url}/user/getServices`);
    setstate(data.data);
    setloading(false);
  };

  return (
    <div
      style={{
        paddingTop: "12px",
        backgroundColor: "rgb(0,8,45)",
        marginTop: "-10px",
      }}
    >
      {/* first line */}
      <Grid container style={{ padding: "20px" }}>
        {/* services heading */}
        <Grid
          style={{ textAlign: "center" }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Typography
            style={{ fontWeight: "bolder", color: "rgb(254,181,2)" }}
            variant="h4"
            color="initial"
          >
            Services
          </Typography>
          <Divider
            style={{
              backgroundColor: "rgb(254,181,2)",
              width: "10%",
              height: "2px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
        </Grid>
      </Grid>

      {/* service card 1/3:first line*/}
      <Container maxWidth="md">
        {/* first main line */}
        {loading ? (
          <Box textAlign="center"><ClipLoader size="10" color="white" /></Box>
        ) : (
          <Grid container spacing={5}>
            {/* first item */}
            {state.map((val) => (
              <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                {/* 1 */}
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <FavoriteBorder style={{ color: "rgb(254,181,2)" }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" style={{ color: "white" }}>
                      {" "}
                      {val.title}{" "}
                    </Typography>
                  </Box>
                  <Box ml={4} mt={2}>
                    <Typography
                      style={{ color: "white" }}
                      variant="captionh1"
                      color="initial"

                    >
                      {val.description}
                    </Typography>
                  </Box>
                  <Button variant="contained"
                  onClick={()=>singleService(val._id)}
                   style={{background:"rgb(254,170,2)",fontSize:"10px",borderRadius:"0px",marginTop:"10px"}}>Details</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        {/* last line for the button */}
        <Grid>
          {/* now its button item */}
          <Grid style={{ textAlign: "center" }}>
            <Button
              size="small"
              variant="contained"
              style={{
                color: "black",
                backgroundColor: "rgb(254,170,2)",
                marginTop: "40px",
                marginBottom: "40px",
                borderRadius: "0px",
              }}
            >
              See All Services
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Service;
