import React, { Component } from "react";
import Form from "./form";
import Navbar from "./navbar";
import CardImage from "./card";
import "../static/card.css";
import Progress from "./progressbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store_data: {
        store_name: "",
        location: ""
      },
      store_details: []
    };
  }
  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      store_data: { ...prevState.store_data, [name]: value }
    }));
    console.log(this.state);
  };

  submitHandler = e => {
    e.preventDefault();
    let new_arr = [];
    new_arr = this.state.store_details;
    new_arr.push(this.state.store_data);
    this.setState({
      store_data: {
        store_name: "",
        location: ""
      }
    });
    console.log(this.state.store_details);
  };

  deleteStore_data(index) {
    let new_arr = this.state.store_details;
    new_arr.splice(index, 1);
    this.setState({ store_details: new_arr });
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <Form
          state={this.state.store_data}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        ></Form>
        <div className="container">
          <div className="row">
            {this.state.store_details.map((item, index) => {
              return (
                <div className="col-xs-12 col-md-4 col-sm-6 div-pad">
                  <CardImage
                    value={item}
                    key={index}
                    deleteMethod={() => this.deleteStore_data(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container progress-container">
          <Progress></Progress>
        </div>
      </div>
    );
  }
}

export default App;
