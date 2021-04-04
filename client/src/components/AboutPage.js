import React, { Component } from "react";
import axios from "axios";
import { staffData } from "./staffData.js"
import Carousel from "react-material-ui-carousel";


import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Paper,
  CardContent,
  List,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import { withStyles } from "@material-ui/core/styles";
import stickFigure from "../img/stick_figure.png";

// import backgroundPic from "../img/tile_background.png"
const styles = (theme) => ({
  root: {
    paddingTop: 50,
    flexGrow: 1,
    // height: '99vh'
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  }
});

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount = async () => {
    try {
      const res = await axios.get("AboutPage.json");

      this.setState({
        people: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>About Closure</h1>
        <Grid container justify="center">

          <Grid item xs={8} >
            <Card style={{ height: "25vh", backgroundColor:"#e4e4e4"}}>
              <CardHeader title="Our Mission"/>
              <CardContent>
                <div>
                  With the rise of the pandemic, hundreds of our beloved businesses have unfortunately closed their doors to the public. 
                  This has left the thousands of people (or maybe just the five of us) with a gaping hole in our hearts because we are left without a sense of closure.
                  Thus, our mission is simple. We want to build a web application to memorialize places that have closed down 
                  so that people can view and comment on. 

                </div>
              </CardContent>
              <CardHeader title="Our Goals"/>
              <CardContent>
                <div>
                  To learn about full stack web development
                </div>
                <div>
                  Experience the project development lifecycle
                </div>
                <div>
                  To successfully build an adequate platform for Closure
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <h1>Meet the Team</h1>
        <Grid container direction="row" alignItems="left" justify="center">
        <Carousel navButtonsProps={{
          style:{
            opacity: "20%"
          }
        }}>
          {staffData.map((elem) => {
            const { Name, Role, Body, image, ID} = elem;
            return (
            <Grid container xs={12} direction="row" alignItems="left" justify="flex-start">
                <Grid item xs={6}>
                    <Paper elevation={0} style={{ height: "25vh", width: "25vw" }}>
                        <img
                        src={image}
                        style={{ height: "100%", maxWidth: "100%" }}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={6} alignContent="center">
                    <Paper elevation={0}>
                      <Card style={{ height: "25vh", width: "25vw" }}>
                        <CardHeader title={Name} subheader={Role} />
                        <CardContent>
                          <div>{Body}</div>
                        </CardContent>
                      </Card>
                    </Paper>
                  </Grid>
                </Grid>
              );
            })}
          </Carousel>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AboutPage);
