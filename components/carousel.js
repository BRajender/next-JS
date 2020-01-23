import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Cards from "./card";

import Wrapper from "../static/StyledComponents/wrapper";
import Title from "../static/StyledComponents/title";

const MultiCarousel = props => {
  const [carouselitems, setCarousel] = useState([
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" },
    { store_name: "KLM", location: "Kukatpally" }
  ]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      margin: "10%"
    },
    media: {
      height: 0,

      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  }));

  const classes = useStyles();
  return (
    <div className="container">
      <Carousel responsive={responsive} autoPlay={true}>
        {carouselitems.map((item, index) => {
          return (
            <div>
              <Cards>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/exhb2.png"
                    title="Paella dish"
                  />
                  <CardContent>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="designerexhi">{item.store_name}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                          <i className="fa fa-map-marker expo-loction"></i>
                        </div>
                        <div className=" col-lg-10 col-md-9 col-sm-9 col-9 expos-str-adrs">
                          <p className="expo-lctn-adrss">{item.location}</p>
                        </div>
                      </div>
                      <div className="row"></div>
                    </div>
                  </CardContent>
                </Card>
              </Cards>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default MultiCarousel;
