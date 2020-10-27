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
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h1>REGISTER A CHARITABLE ORGANIZATION</h1>
          <table>
            <tr>
              <td>
                <label>Charity Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.charityName}
                  onChange={this.namehandler}
                  placeholder="charity name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>First Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.firsthandler}
                  placeholder="Jane"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Last Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.lasthandler}
                  placeholder="Smith"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email: </label>
              </td>
              <td>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.emailhandler}
                  placeholder="email@email.com"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address1: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.address1}
                  onChange={this.address1handler}
                  placeholder="address1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address2: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.address2}
                  onChange={this.address2handler}
                  placeholder="address2"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>City: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.city}
                  onChange={this.cityhandler}
                  placeholder="city"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>State: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.state}
                  onChange={this.statehandler}
                  placeholder="state"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Zip Code: </label>
              </td>
              <td>
                <input
                  type="number"
                  value={this.state.zipCode}
                  onChange={this.ziphandler}
                  placeholder="zip code"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone Number: </label>
              </td>
              <td>
                <input
                  type="tel"
                  value={this.state.phoneNumber}
                  onChange={this.phonehandler}
                  placeholder="1234567890"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Website: </label>
              </td>
              <td>
                <input
                  type="url"
                  value={this.state.website}
                  onChange={this.websitehandler}
                  placeholder="http://hello.com"/>
              </td>
            </tr>
          </table>
          {this.state.error && <div>{this.state.error}</div>}
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}
