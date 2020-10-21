import Axios from "axios";
import React, { Component } from "react";
import "./form.css";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      website: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  address1handler = (event) => {
    this.setState({
      address1: event.target.value,
    });
  };

  address2handler = (event) => {
    this.setState({
      address2: event.target.value,
    });
  };

  cityhandler = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  statehandler = (event) => {
    this.setState({
      state: event.target.value,
    });
  };

  ziphandler = (event) => {
    this.setState({
      zipCode: event.target.value,
    });
  };

  phonehandler = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  websitehandler = (event) => {
    this.setState({
      website: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.firstName} Registered Successfully!`);
    console.log(this.state);
    const {
      firstName,
      lastName,
      email,
      address1,
      address2,
      city,
      state,
      zipCode,
      phoneNumber,
      website,
    } = this.state;
    Axios.post(`${process.env.REACT_APP_API_URL}/api/charity`, {
      firstName,
      lastName,
      email,
      address1,
      address2,
      city,
      state,
      zipCode,
      phoneNumber,
      website,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   address1: "",
    //   address2: "",
    //   city: "",
    //   state: "",
    //   phoneNumber: "",
    //   website: "",
    //   zipCode: "",
    // });
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h1>REGISTER A CHARITABLE ORGANIZATION</h1>
          <label>First Name: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firsthandler}
            placeholder="name"
          />
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            placeholder="name"
          />
          <br />
          <label>Email: </label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.emailhandler}
            placeholder="email"
          />
          <br />
          <label>Address1: </label>
          <input
            type="text"
            value={this.state.address1}
            onChange={this.address1handler}
            placeholder="address1"
          />
          <br />
          <label>Address2: </label>
          <input
            type="text"
            value={this.state.address2}
            onChange={this.address2handler}
            placeholder="address2"
          />
          <br />
          <label>City: </label>
          <input
            type="text"
            value={this.state.city}
            onChange={this.cityhandler}
            placeholder="city"
          />
          <br />
          <label>State: </label>
          <input
            type="text"
            value={this.state.state}
            onChange={this.statehandler}
            placeholder="state"
          />
          <br />
          <label>Zip Code: </label>
          <input
            type="number"
            value={this.state.zipCode}
            onChange={this.ziphandler}
            placeholder="zip code"
          />
          <br />
          <label>Phone Number: </label>
          <input
            type="tel"
            value={this.state.phoneNumber}
            onChange={this.phonehandler}
            placeholder="phone number"
          />
          <br />
          <label>Website: </label>
          <input
            type="url"
            value={this.state.website}
            onChange={this.websitehandler}
            placeholder="website"
          />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}
