import Axios from "axios";
import React, { Component } from "react";
import "./form.css";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charityName: "",
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
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  namehandler = (event) => {
    this.setState({
      charityName: event.target.value,
    });
  };
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
    event.preventDefault();

    const {
      charityName,
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

    if (
      !(
        charityName &&
        firstName &&
        lastName &&
        email &&
        address1 &&
        address2 &&
        city &&
        state &&
        zipCode &&
        phoneNumber &&
        website
      )
    )
      return this.setState({ error: "All fields required !" });

    this.setState({ error: "" });
    Axios.post(`${process.env.REACT_APP_API_URL}/api/charity`, {
      charityName,
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
      .then((res) => {
        console.log(res);
        alert(`${this.state.firstName} Registered Successfully!`);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h1>REGISTER A CHARITABLE ORGANIZATION</h1>
            <div className="form-label-input">
              <div className="row">
                <div className="form-label">
                    <label>Charity Name: </label>
                </div>    
                <div className="form-input">
                    <input
                      type="text"
                      value={this.state.charityName}
                      onChange={this.namehandler}
                      placeholder="charity name"
                    />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                    <label>First Name: </label>
                </div>
                <div className="form-input">
                    <input
                      type="text"
                      value={this.state.firstName}
                      onChange={this.firsthandler}
                      placeholder="Jane"
                    />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                    <label>Last Name: </label>
                </div>
                <div className="form-input">
                    <input
                      type="text"
                      value={this.state.lastName}
                      onChange={this.lasthandler}
                      placeholder="Smith"
                    />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                    <label>Email: </label>
                </div>
                <div className="form-input">
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.emailhandler}
                      placeholder="email@email.com"
                    />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                      <label>Address1: </label>
                </div>
                <div className="form-input">
                      <input
                        type="text"
                        value={this.state.address1}
                        onChange={this.address1handler}
                        placeholder="address1"
                      />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                      <label>Address2: </label>
                </div>
                <div className="form-input">
                      <input
                        type="text"
                        value={this.state.address2}
                        onChange={this.address2handler}
                        placeholder="address2"
                      />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                      <label>City: </label>
                </div>
                <div className="form-input">
                      <input
                        type="text"
                        value={this.state.city}
                        onChange={this.cityhandler}
                        placeholder="city"
                      />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                      <label>State: </label>
                </div>
                <div className="form-input">
                      <input
                        type="text"
                        value={this.state.state}
                        onChange={this.statehandler}
                        placeholder="state"
                      />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                      <label>Zip Code: </label>
                </div>
                <div className="form-input">
                      <input
                        type="number"
                        value={this.state.zipCode}
                        onChange={this.ziphandler}
                        placeholder="zip code"
                      />
                </div>
              </div>
              <div className="row">
                <div className="form-label">
                      <label>Phone Number: </label>
                </div>
                <div className="form-input">
                      <input
                        type="tel"
                        value={this.state.phoneNumber}
                        onChange={this.phonehandler}
                        placeholder="1234567890"
                      />
                </div>     
              </div>
              <div className="row">  
                <div className="form-label">
                      <label>Website: </label>
                </div>
                <div className="form-input">
                      <input
                        type="url"
                        value={this.state.website}
                        onChange={this.websitehandler}
                        placeholder="http://hello.com"/>
                </div>
              </div>
                  {this.state.error && <div>{this.state.error}</div>}
                  <input type="submit" value="Register" />
            </div>
        </form>
      </div>
    );
  }
}
