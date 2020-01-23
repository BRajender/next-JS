import React, { Component } from "react";
import "../static/card.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class CardImage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.value);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
     
            <Card className="example-card">
              <a>
                <CardImg
                  top
                  width="100%"
                  src={"/images/exhb2.png"}
                  alt="Card image cap"
                />

                <CardText className="expo-info">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="designerexhi">
                          {this.props.value.store_name}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                        <i className="fa fa-map-marker expo-loction"></i>
                      </div>
                      <div className=" col-lg-10 col-md-9 col-sm-9 col-9 expos-str-adrs">
                        <p className="expo-lctn-adrss">
                          {this.props.value.location}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <button type="button" onClick={this.props.deleteMethod}>Delete</button>
                    </div>
                    {/* <div className="row">
                                <div className=" col-lg-1 col-md-1 col-sm-1 col-1">
                                  <i className="fa fa-calendar-o expo-dte"></i>
                                </div>
                                <div className="col-lg-10 col-md-9 col-sm-9 col-9 expos-str-dt">
                                  <p className="expo-lctn-date">{item.date}</p>
                                </div>
                              </div> */}
                  </div>
                </CardText>
              </a>
            </Card>
          
    );
  }
}

export default CardImage;
